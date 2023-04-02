
const total_quran_pages = 10;

function createQuranBook() {
    loadWowBook();
}

function loadWowBook() {
     $(document).ready(function() {
        $(".quran").wowBook({
            height: 660,
            width: 810,
            flipSound: false,
            hardcovers: false,
            centeredWhenClosed: true,
            pageNumbers: false,
            rtl: 1,
        }).css({ 'display': 'none', 'margin': 'auto' }).fadeIn(1000);
    });

}