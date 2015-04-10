(function () {
    var $dropbox = document.getElementById('dropbox');

    function hover (e) {
        e.stopPropagation();
        e.preventDefault();
        e.target.className = (e.type == 'dragover' ? 'hover' : '');
    }

    $dropbox.addEventListener('dragover', hover, false);
    $dropbox.addEventListener('dragleave', hover, false);
    $dropbox.addEventListener('drop', function (e) {
        // handle dropping of file
        hover(e);
    });

})();