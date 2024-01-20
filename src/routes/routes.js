
const {modifyReview,deleteReview,writeReview,getAllBooksByAsyncAwait,getSingleBookByISBNByAsyncAwait,getBooksByAuthorNameByAsyncAwait,getBooksByTitleByAsyncAwait ,getAllBooks,getSingleBookByISBN,getBooksByISBNs,loginUser,registerUser,getBookReviewByTitle,getBooksByAuthorName,getBooksByTitle}=require('../controller/bookshop')
const router=require('express').Router()

router.get("/getAllBooks",getAllBooks)
router.get("/getsinglebookByisbn/:isbn",getSingleBookByISBN)
router.post("/getbooksByisbn",getBooksByISBNs)
router.get("/getbooksByAuthorName/:authorName",getBooksByAuthorName)
router.get("/getbooksByBookTitle/:bookTile",getBooksByTitle)
router.get("/getbookReviewByBookTitle/:bookTile",getBookReviewByTitle)


router.post("/writeReview",writeReview)
router.post("/deleteReview",deleteReview)
router.post("/modifyReview",modifyReview)


router.post("/registerUser",registerUser)
router.post("/loginUser",loginUser)


// ASYNC AWAIT + AXIOS IMPLEMENTATION

router.get("/getAllBooksAsyncAwait",getAllBooksByAsyncAwait)
router.get("/getsinglebookByisbnAsyncAwait/:isbn",getSingleBookByISBNByAsyncAwait)
router.get("/getbooksByAuthorNameAsyncAwait/:authorName",getBooksByAuthorNameByAsyncAwait)
router.get("/getbooksByBookTitleAsyncAwait/:bookTile",getBooksByTitleByAsyncAwait)



module.exports=router