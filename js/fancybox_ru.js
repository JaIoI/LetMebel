!(function (o, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports)
        : "function" == typeof define && define.amd
        ? define(["exports"], e)
        : e((((o = "undefined" != typeof globalThis ? globalThis : o || self).Fancybox = o.Fancybox || {}), (o.Fancybox.l10n = o.Fancybox.l10n || {})));
})(this, function (o) {
    "use strict";
    const e = Object.assign(
        Object.assign(
            {},
            {
                PANUP: "Вверх",
                PANDOWN: "Вниз",
                PANLEFT: "Влево",
                PANRIGHT: "Вправо",
                ZOOMIN: "Увеличить",
                ZOOMOUT: "Уменьшить",
                TOGGLEZOOM: "Масштабирование",
                TOGGLE1TO1: "Масштабирование",
                ITERATEZOOM: "Масштабирование",
                ROTATECCW: "Повернуть против часовой стрелки",
                ROTATECW: "Повернуть по часовой стрелке",
                FLIPX: "Перевернуть горизонтально",
                FLIPY: "Перевернуть вертикально",
                FITX: "Подгонка по горизонтали",
                FITY: "Подгонка по вертикали",
                RESET: "Сбросить",
                TOGGLEFS: "Переключение полноэкранного режима",
            }
        ),
        {
            CLOSE: "Закрыть",
            NEXT: "Следующий",
            PREV: "Предыдущий",
            MODAL: "Вы можете закрыть это модальное содержимое с помощью клавиши ESC",
            ERROR: "Что-то пошло не так, пожалуйста, повторите попытку позже",
            IMAGE_ERROR: "Изображение не найдено",
            ELEMENT_NOT_FOUND: "Элемент HTML не найден",
            AJAX_NOT_FOUND: "Ошибка загрузки AJAX: не найдено",
            AJAX_FORBIDDEN: "Ошибка загрузки AJAX : Запрещено",
            IFRAME_ERROR: "Ошибка загрузки страницы",
            TOGGLE_ZOOM: "Масштабирование",
            TOGGLE_THUMBS: "Миниатюры",
            TOGGLE_SLIDESHOW: "Слайд-шоу",
            TOGGLE_FULLSCREEN: "Переключение полноэкранного режима",
            DOWNLOAD: "Загрузить",
        }
    );
    o.ru = e;
});
