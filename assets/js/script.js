$('#search').autocomplete({ 
  source: function(req, res) {
    $.ajax({
      url: './inc/app.php',
      type: 'GET',
      dataType: 'json',
      data: {
        book: req.term
      },
      success: function(data) {
        console.log(data);
        let name = data.itens.map(function(book) {
          return {
            label: book.name
          }
        });
        res(name);
      }
    });
  },
  minLength: 2
});

$('#btn').on('click', function(event) {
  event.preventDefault();

  let searchTerm = $('#search').val();
  $.ajax({
    url: './inc/app.php',
    type: 'GET',
    dataType: 'json',
    data: {
      book: searchTerm
    },
    success: function(data) {
      if(data.itens.length == 0) {
        $('#book').html(`<div class="info">Nenhum livro encontrado</div>`)
      } else {
        let book = data.itens[0];

        console.log(book);

        $('#book').html(`
          <div class="img">
            <img src="${book.image}" />
          </div>
          <div class="info">
            <h2>${book.name}</h2>
            <h3><span>Autor: </span>${book.author}</h3>
            <h3><span>Gênero: </span>${book.genre}</h3>
          </div>
        `);
      }
    }
  });
  $('#search').val('');
});