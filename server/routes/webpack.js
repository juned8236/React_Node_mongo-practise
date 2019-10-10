var express=require('express');
var router=express.Router();
var shareObj=require('./share');

router.post('/std-reg',function(req,res){
    var name=req.body.name;
    var rno=req.body.rno;
    var email=req.body.email;
    var loc=req.body.loc;
    // console.log(name)
    // console.log(rno)
    // console.log(email)
    // console.log(name)



    shareObj.getPgConnection(res,function(con){
        var q="INSERT INTO users (name, rno, email, loc) VALUES('"+name+"', '"+rno+"', '"+email+"', '"+loc+"') ";
        con.query(q,function(e,s){
            if (e){
                res.send(e);
            }else{
                res.send(s);
            }
        })
    }
    )
})
router.get('/std-list',function(req,res,next){
    shareObj.getPgConnection(
      res,
      function(con){
           var q="SELECT * FROM users ORDER BY id ASC;";
           con.query(q,function(e,s){
               if(e){
                 res.send(e);
               }else{
                 res.send(s);
               }
           })
      }
    )
})

router.post('/std-update',function(req,res){
    var name=req.body.name;
    var rno=req.body.rno;
    var email=req.body.email;
    var loc=req.body.loc;
    var id=req.body.id;
    shareObj.getPgConnection(
        res,function(con){
         var q="UPDATE users SET name='"+name+"', rno='"+rno+"', email='"+email+"',loc='"+loc+"' WHERE id="+id;  
            con.query(q,function(e,s){
                if(e){
                    res.send(e);
                }else{
                    res.send(s)
                }
      
            })
            
        }
      )

  

})

router.get('/delete',function(request,response){
    var id=request.query.id
    shareObj.getPgConnection(response,function(callback){
        var q="DELETE FROM users WHERE id="+id;
        callback.query(q,function(e,s){
            if(e){
                response.send(e);
            }else{
                response.send(s);
            }
        })
    })
})
module.exports=router;
