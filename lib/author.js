var db = require('./db')
var template = require('./template.js');
var qs = require('querystring');
exports.home=function(request,response){


    db.query(`SELECT * FROM TOPIC`, function(error, topics){
            
        //쿼리문의 결과값이 topics에 담긴다.
        db.query(`SELECT * FROM author`, function(error2, authors){
        
        var title = 'author';
        var list = template.list(topics);
        var html = template.HTML(title, list,
        `
            ${template.authorTable(authors)}
        <style>
            table{
                border-collapse:collapse
            }
            td{
                border:1px solid black;
            }
        </style>
        <form action="/create_author_process", method="post">
            <p>
                <input type="text" name="name" placeholder="name">
            </p>
            <p>
                <textarea name="profile" placeholder="profile"></textarea>
            </p>
            <p>
                <input type="submit">
            </p>
        </form>
        
        
        `,
     ''
        );
        response.writeHead(200);
        response.end(html);

    });

})
}

exports.create_author_process=function(request,response){
    var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          
          db.query(`
          INSERT INTO author (name,profile) 
          VALUES(?,?)`,[post.name,post.profile],
          function(error,results){
            if(error){
              throw error;
            }
            response.writeHead(302,{Location:`/author`})
            response.end();
          }
          )
          
      });
}