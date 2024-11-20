import { ref, nextTick } from 'vue';

export default {
    install(Vue) {
        // alert or confirm modal
        const prevFocus = ref([]);
        const systemModal = {
            open: (opt) => {
                let id = opt.id;
                let type = opt.type;
                let label = opt.label ? opt.label : type == 'confirm' ? '확인 창' : '알림 창';
                let cont = opt.cont;
                let okText = opt.okText ? opt.okText : '확인';
                let cancelText = opt.cancelText ? opt.cancelText : '취소';
                let okCallback = opt.okCallback;
                let cancelCallback = opt.cancelCallback;

                // create modal elements
                let modalLayout = document.querySelector('.modal-layout');
                let modalWrap = document.createElement('div');
                let modalBody = document.createElement('div');
                let modalFooter = document.createElement('div');
                let btnOk = document.createElement('button');
                let btnCancel = type == 'confirm' && document.createElement('button');

                // properties
                modalWrap.setAttribute('id', id);
                modalWrap.setAttribute('class', 'modal-wrap system');
                modalWrap.setAttribute('role', 'alertdialog');
                modalWrap.setAttribute('aria-modal', true);
                modalWrap.setAttribute('aria-label', label);
                modalWrap.setAttribute('aria-describedby', `${id}_desc`);
                modalWrap.setAttribute('tabindex', -1);
                modalBody.setAttribute('class', 'modal-body');
                modalBody.setAttribute('id', `${id}_desc`);
                modalFooter.setAttribute('class', 'modal-footer');
                btnOk.setAttribute('type', 'button');
                btnOk.setAttribute('class', 'modal-btn-primary');
                if (type == 'confirm') {
                    btnCancel.setAttribute('type', 'button');
                    btnCancel.setAttribute('class', 'modal-btn-gray');
                }

                // make
                modalBody.innerHTML = cont;
                if (type == 'confirm') {
                    btnCancel.innerHTML = `<span>${cancelText}</span>`;
                    modalFooter.appendChild(btnCancel);
                }
                btnOk.innerHTML = `<span>${okText}</span>`;
                modalFooter.appendChild(btnOk);
                modalWrap.appendChild(modalBody);
                modalWrap.appendChild(modalFooter);
                modalLayout.appendChild(modalWrap);

                modalLayout.classList.add('show');
                modalWrap.classList.add('show');
                document.body.style.overflowY = 'hidden';

                let openedModals = modalLayout.querySelectorAll('.modal-wrap.show:not(.system)');
                if (openedModals.length > 0) {
                    openedModals.forEach((modal) => {
                        modal.style.zIndex = -1;
                    });
                }

                // 웹 접근성 관련 focus 이동
                accessibility(id);

                // mobile screen reader 대응
                document.querySelector('.wrap').setAttribute('aria-hidden', true);

                // 실행
                const okAct = () => {
                    !!okCallback && okCallback();

                    nextTick(() => {
                        // 닫기
                        systemModal.close(id);
                    });
                };

                // 취소
                const cancelAct = () => {
                    !!cancelCallback && cancelCallback();

                    nextTick(() => {
                        // 닫기
                        systemModal.close(id);
                    });
                };

                // 확인 버튼
                btnOk.addEventListener('click', okAct);
                // 취소 버튼
                type == 'confirm' && btnCancel.addEventListener('click', cancelAct);
            },
            close: (_id) => {
                let modalWrap = document.querySelector(`#${_id}`);
                let modalLayout = modalWrap.closest('.modal-layout');
                let prevObj = prevFocus.value[prevFocus.value.length - 1];

                modalWrap.remove();
                prevFocus.value.pop();

                let openedModals = modalLayout.querySelectorAll('.modal-wrap.show');
                if (openedModals.length < 2) {
                    openedModals.forEach((modal) => {
                        modal.removeAttribute('style');
                    });
                }

                if (prevFocus.value.length < 1) {
                    modalLayout.classList.remove('show');
                    document.body.removeAttribute('style');

                    // mobile screen reader 대응
                    document.querySelector('.wrap').removeAttribute('aria-hidden');
                }

                // focus 원복
                prevObj.focus();
            }
        };

        // modal(regular)
        const layerModal = {
            init: (opt) => {
                let id = opt.id;
                let modalWrap = document.querySelector(`#${id}`);
                let modalLayout = modalWrap.closest('.modal-layout');

                return { modalLayout, modalWrap };
            },
            open: (opt) => {
                const modal = layerModal.init(opt);
                let modalLayout = modal.modalLayout;
                let modalWrap = modal.modalWrap;

                modalLayout.classList.add('show');
                modalWrap.classList.add('show');
                document.body.style.overflowY = 'hidden';

                // 웹 접근성 관련 focus 이동
                accessibility(opt.id);

                // mobile screen reader 대응
                document.querySelector('.wrap').setAttribute('aria-hidden', true);
            },
            close: (opt) => {
                const modal = layerModal.init(opt);

                let modalLayout = modal.modalLayout;
                let modalWrap = modal.modalWrap;
                let prevObj = prevFocus.value[prevFocus.value.length - 1];
                let focusableEls = modalWrap.querySelectorAll(
                    '[href], button, select, input, textarea, [tabindex]:not([tabindex="-1"])'
                );

                focusableEls.forEach((el) => {
                    el.setAttribute('tabindex', -1);
                });

                modalLayout.classList.remove('show');
                modalWrap.classList.remove('show');
                prevFocus.value.pop();

                let openedModals = modalLayout.querySelectorAll('.modal-wrap.show');
                if (openedModals.length < 2) {
                    openedModals.forEach((modal) => {
                        modal.removeAttribute('style');
                    });
                }

                if (prevFocus.value.length < 1) {
                    modalLayout.classList.remove('show');
                    document.body.removeAttribute('style');

                    // mobile screen reader 대응
                    document.querySelector('.wrap').removeAttribute('aria-hidden');
                }

                // focus 원복
                prevObj.focus();
            }
        };

        // toast modal
        const toastModal = (opt) => {
            let id = opt.id;
            let cont = opt.cont;
            let time = opt.during ? opt.during : 3000;
            let body = document.body;
            let toastWrap = document.createElement('div');
            let toastTimer;

            toastWrap.setAttribute('id', id);
            toastWrap.setAttribute('class', 'toast-wrap');
            toastWrap.setAttribute('role', 'alert');
            toastWrap.setAttribute('aria-live', 'assertive');

            toastWrap.innerHTML = cont;
            body.appendChild(toastWrap);

            toastTimer = setTimeout(() => {
                toastWrap.remove();

                clearTimeout(toastTimer);
            }, time);
        };

        // modal에서의 웹 접근성 관련 focus 이동
        const accessibility = (_id) => {
            let modalWrap = document.querySelector(`#${_id}`);
            let focusableEls = modalWrap.querySelectorAll(
                '[href], button, select, input, textarea, [tabindex]:not([tabindex="-1"])'
            );
            let firstEl = focusableEls[0];
            let lastEl = focusableEls[focusableEls.length - 1];
            prevFocus.value.push(document.activeElement);

            // tabindex 초기화
            focusableEls.forEach((el) => {
                el.removeAttribute('tabindex');
            });

            // focus 이동
            modalWrap.focus();
            const moveFocus = (e) => {
                let focusEl = document.activeElement;

                if (e.key == 'Tab') {
                    if (e.shiftKey && (focusEl == firstEl || focusEl == modalWrap)) {
                        e.preventDefault();
                        lastEl.focus();
                    } else if (!e.shiftKey && focusEl == lastEl) {
                        e.preventDefault();
                        firstEl.focus();
                    }
                }
            };

            modalWrap.addEventListener('keydown', moveFocus);
        };

        // tab contents setup
        const selTabIdx = ref();
        const tabContents = {
            setup: (opt) => {
                let id = opt.id;
                let selIdx = opt.active ? opt.active : 0;
                let tabWrap = document.querySelector(`#${id}`);
                let tabList = tabWrap.querySelector('.tab-list');
                let tabItems = tabWrap.querySelectorAll('.tab-item');
                let tabPanels = tabWrap.querySelectorAll('.tab-panel');

                selTabIdx.value = selIdx;
                tabList.setAttribute('role', 'tablist');

                // tab item setup
                tabItems.forEach((tab, index) => {
                    let cnt = index + 1;
                    tab.closest('li').setAttribute('role', 'presentation');
                    tab.setAttribute('id', `${id}-tab${cnt}`);
                    tab.setAttribute('role', 'tab');
                    tab.setAttribute('aria-controls', `${id}-panel${cnt}`);

                    if (index == selIdx) {
                        tab.setAttribute('aria-selected', true);
                        tab.removeAttribute('tabindex');
                    } else {
                        tab.setAttribute('aria-selected', false);
                        tab.setAttribute('tabindex', -1);
                    }

                    const tabMove = (e) => {
                        // tab selected change
                        for (let i = 0; i < tabItems.length; i++) {
                            if (i !== index) {
                                tabItems[i].setAttribute('aria-selected', false);
                                tabItems[i].setAttribute('tabindex', -1);
                            }
                        }

                        // panel hidden change
                        for (let i = 0; i < tabPanels.length; i++) {
                            tabPanels[i].setAttribute('aria-hidden', true);
                        }

                        tab.setAttribute('aria-selected', true);
                        tab.removeAttribute('tabindex');
                        tabPanels[index].setAttribute('aria-hidden', false);

                        selTabIdx.value = index;

                        tabScroll(e);
                    };

                    const tabScroll = (e) => {
                        // device 체크
                        let userAgent = navigator.userAgent;
                        let device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

                        if (!device.test(userAgent)) return false;

                        let target = e.target;
                        let targetL = target.getBoundingClientRect().left - 9;

                        tabList.scrollTo({ left: targetL, behavior: 'smooth' });
                    };

                    // tab click
                    tab.addEventListener('click', tabMove);

                    // move focus with arrow keys
                    tab.addEventListener('keydown', (e) => {
                        if (e.key == 'ArrowRight' || e.key == 'ArrowLeft') {
                            if (e.key == 'ArrowRight') {
                                e.preventDefault();
                                selTabIdx.value++;

                                if (selTabIdx.value > tabItems.length - 1) {
                                    selTabIdx.value = tabItems.length - 1;
                                }
                            } else if (e.key == 'ArrowLeft') {
                                e.preventDefault();
                                selTabIdx.value--;

                                if (selTabIdx.value < 0) {
                                    selTabIdx.value = 0;
                                }
                            }

                            for (let i = 0; i < tabItems.length; i++) {
                                tabItems[i].setAttribute('aria-selected', false);
                                tabItems[i].setAttribute('tabindex', -1);
                                tabPanels[i].setAttribute('aria-hidden', true);
                            }

                            tabItems[selTabIdx.value].focus();
                            tabItems[selTabIdx.value].setAttribute('aria-selected', true);
                            tabItems[selTabIdx.value].removeAttribute('tabindex');
                            tabPanels[selTabIdx.value].setAttribute('aria-hidden', false);

                            tabScroll(e);
                        }
                    });
                });

                // panel setup
                tabPanels.forEach((panel, index) => {
                    let cnt = index + 1;
                    panel.setAttribute('id', `${id}-panel${cnt}`);
                    panel.setAttribute('role', 'tabpanel');
                    panel.setAttribute('aria-labelledby', `${id}-tab${cnt}`);

                    if (index == selIdx) {
                        panel.setAttribute('aria-hidden', false);
                    } else {
                        panel.setAttribute('aria-hidden', true);
                    }
                });
            }
        };

        Vue.provide('systemModal', systemModal);
        Vue.provide('layerModal', layerModal);
        Vue.provide('toastModal', toastModal);
        Vue.provide('tabContents', tabContents);
    }
};
