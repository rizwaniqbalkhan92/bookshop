const {books,userList}=require('../model/data')

const axios = require('axios');

// get all data of books
 const getAllBooks=(req,res)=>{

    return res.status(200).send(JSON.stringify({
      data:books  , message:"the list of books are avaiable here"
    }))

}
// get single book by ISBN
 const getSingleBookByISBN=(req,res)=>{
    const isbn=req?.params?.isbn;
  
    const filteredBook=books?.filter((book)=>book.isbn==isbn);
    if(filteredBook.length>0){
        return res.status(200).send(JSON.stringify({
          data:filteredBook  
        }))

    }
    return res.status(404).send(JSON.stringify({
      data:''  , message:"Book Not Found"
    }))

}
// get single book by ISBN
 const getBooksByISBNs=(req,res)=>{
    const isbnArray= req?.body?.isbns
    var data=[];
   for(let i=0; i<isbnArray.length; i++){
    console.log(isbnArray[i])
   }

return res.send(data)
}
// get  books by Author name
 const getBooksByAuthorName=(req,res)=>{
    const authorName= req?.params?.authorName
    console.log(authorName)
    const filteredBook=books.filter((book)=>book.bookAuthor===authorName);
    console.log(filteredBook)

return res.send(filteredBook)
}
// get  books by Author name
 const getBooksByTitle=(req,res)=>{
    const bookTile= req?.params?.bookTile
    console.log(bookTile)
    const filteredBook=books.filter((book)=>book.bookTitle===bookTile);
    console.log(filteredBook)

return res.send(filteredBook)
}
// get  books by Author name
 const getBookReviewByTitle=(req,res)=>{
    const bookTile= req?.params?.bookTile
    console.log(bookTile)
    const filteredBook=books.filter((book)=>book.bookTitle===bookTile)[0];
    console.log(filteredBook)

return res.status(200).send({data:filteredBook.reviews})
}

const registerUser=(req,res)=>{
    const {email,userName,userId}=req?.body
    console.log(req.body)
    const filterUser=userList.filter((user)=>user.email===email)[0];
    if(filterUser){
        return res.status(502).send({message:`${email} is already registered !!`})
    }
    else{
        userList.push({email,userId:Math.random()* 10 + Date.now(),userName});
        return res.status(200).send({data:{email,userId,userName},message:"You Have Successfully Registered"});
    }
}
const loginUser=(req,res)=>{
    const {email}=req?.body
    console.log(req.body)
    const filterUser=userList.filter((user)=>user.email===email);
    if(!filterUser.length>0){
    
        return res.status(200).send({data:{email},message:"You Have Successfully Login!!"});
    }
    else{
        return res.status(502).send({message:`This ${email} doesn't exist Account !!`})
    }
}


// Function to get all books
const getAllBooksByAsyncAwait = async (req,res) => {
  try {
    const response = await axios.get('http://localhost:5000/bookshop/getAllBooks');
     return  res.status(200).send({data:response.data.data}) ;
  } catch (error) {
    throw error;
  }
};

// Function to get single book by ISBN
const getSingleBookByISBNByAsyncAwait = (req,res) => {
  return new Promise(async (resolve, reject) => {
    try {
        const isbn=req.params.isbn
        console.log(isbn)
      const response = await axios.get(`http://localhost:5000/bookshop/getsinglebookByisbn/${isbn}`);
      console.log(response.data.data)
      resolve({
        data: response,
      });
    } catch (error) {
      reject({
        data: '',
        message: "Book Not Found"
      });
    }
  });
};

// Function to get books by Author name
const getBooksByAuthorNameByAsyncAwait = (req,res) => {
    const authorName=req.params.authorName
  return axios.get(`http://localhost:5000/bookshop/getbooksByAuthorName/${authorName}`)
    .then(response => response.json())
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      return [];
    });
};

// Function to get books by title name
const getBooksByTitleByAsyncAwait = (req,res) => {
    const bookTile=req.params.bookTile
    return axios.get(`http://localhost:5000/bookshop/getbooksByBookTitleAsyncAwait/${bookTile}`)
    .then(response => response.json())
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      return [];
    });
};



const writeReview=(req,res)=>{
const {review,bookTile,id,userName}=req.body;
console.log(req.body)
const filterUser=userList.filter((user)=>user.userId==id);
if(filterUser.length>0){
const filterBook=books.filter((book)=>book.bookTitle==bookTile);
if(filterBook.length>0){
 let reviewArr= filterBook[0].reviews;
 reviewArr.push({id, userName, review })
 return res.status(200).send({data:reviewArr,message:"Book Review Added"});
 
}
else{
    return res.status(404).send({message:"Book Not Found"});

}
}
else{
    return res.status(400).send({message:"Only Register User Can Write Review"});

}



}



const deleteReview=(req,res)=>{

    const {bookTitle,id}=req.body;
    const filterBook=books.filter((book)=>book.bookTitle==bookTitle);
if(filterBook.length>0){
 let reviewArr= filterBook[0].reviews?.filter((review)=>review.id!=id);
 return res.status(200).send({data:reviewArr,message:"Your Book Review Deleted"});
 
}
else{
    return res.status(404).send({message:"Book Not Found"});
}

}
const modifyReview=(req,res)=>{

    let {bookTile,id,userName,review}=req.body;
    console.log(review,id,bookTile,userName)
    let filterBook=books.filter((book)=>book.bookTitle==bookTile);
    if(filterBook.length>0){
    console.log(review,id,bookTile,userName)
    let reviewObj= filterBook[0].reviews?.filter((obj)=>obj.id==62);


    console.log(reviewObj)
    reviewObj.review=review
    reviewObj.userName=userName
    let arrReview=filterBook[0].reviews
    arrReview.push(reviewObj)
 return res.status(200).send({data:arrReview,message:"Your Book Review Updated"});
 
}
else{
    return res.status(404).send({message:"Book Not Found"});
}

}





module.exports={modifyReview,deleteReview,writeReview,getAllBooksByAsyncAwait,getSingleBookByISBNByAsyncAwait,getBooksByAuthorNameByAsyncAwait,getBooksByTitleByAsyncAwait ,  getAllBooks,getSingleBookByISBN,loginUser,registerUser,getBooksByISBNs,getBookReviewByTitle,getBooksByAuthorName,getBooksByTitle}