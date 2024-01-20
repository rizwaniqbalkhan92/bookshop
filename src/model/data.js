
 const books = [
    {
      bookName: "The Great Gatsby",
      bookTitle: "The Great Gatsby",
      bookAuthor: "F. Scott Fitzgerald",
      isbn: 9780142437344,
      reviews: [
        {  id:1, userName: "Alice", review: "A classic novel depicting the decadence of the American Dream." },
        { id:2, userName: "Bob", review: "An exploration of wealth, love, and the illusions of the Jazz Age." },
        { id:3, userName: "Charlie", review: "Fitzgerald's prose captures the essence of the Roaring Twenties." },
      ],
    },
    {
      bookName: "To Kill a Mockingbird",
      bookTitle: "To Kill a Mockingbird",
      bookAuthor: "Harper Lee",
      isbn: 9780061120084,
      reviews: [
        {  id:4, userName: "David", review: "A powerful exploration of racial injustice in the American South." },
        { id:5, userName: "Emily", review: "Harper Lee's masterpiece addresses timeless themes of morality and compassion." },
        { id:6, userName: "Frank", review: "Atticus Finch remains one of literature's most admirable characters." },
      ],
    },
    {
      bookName: "The Catcher in the Rye",
      bookTitle: "The Catcher in the Rye",
      bookAuthor: "J.D. Salinger",
      isbn: 9780241950425,
      reviews: [
        {  id:7, userName: "Grace", review: "Holden Caulfield's journey captures the angst and alienation of adolescence." },
        { id:8, userName: "Harry", review: "A timeless coming-of-age novel with a rebellious protagonist." },
        { id:9, userName: "Isabel", review: "Salinger's portrayal of teenage rebellion resonates across generations." },
      ],
    },
    {
      bookName: "1984",
      bookTitle: "1984",
      bookAuthor: "George Orwell",
      isbn: 9780141036144,
      reviews: [
        {  id:9, userName: "Jack", review: "A dystopian masterpiece that warns of the dangers of totalitarianism." },
        { id:10, userName: "Katherine", review: "Orwell's vision of a surveillance state remains chillingly relevant." },
        { id:11, userName: "Leo", review: "A thought-provoking exploration of power, control, and individuality." },
      ],
    },
    {
      bookName: "One Hundred Years of Solitude",
      bookTitle: "One Hundred Years of Solitude",
      bookAuthor: "Gabriel García Márquez",
      isbn: 9780061120084,
      reviews: [
        {  id:12, userName: "Mary", review: "A magical realist epic that weaves the history of the Buendía family." },
        { id:13, userName: "Nathan", review: "Márquez's storytelling is a tapestry of enchanting and surreal events." },
        { id:14, userName: "Olivia", review: "A Latin American literary masterpiece that transcends time and space." },
      ],
    },
    {
      bookName: "Brave New World",
      bookTitle: "Brave New World",
      bookAuthor: "Aldous Huxley",
      isbn: 9780060850524,
      reviews: [
        {  id:15, userName: "Alice", review: "A cautionary tale about the dehumanizing effects of technological progress." },
        { id:16, userName: "Bob", review: "Huxley's dystopian vision challenges societal norms and individuality." },
        { id:17, userName: "Charlie", review: "A thought-provoking exploration of happiness, control, and conformity." },
      ],
    },
    {
      bookName: "Pride and Prejudice",
      bookTitle: "Pride and Prejudice",
      bookAuthor: "Jane Austen",
      isbn: 9780141439518,
      reviews: [
        {  id:18, userName: "David", review: "A classic romantic novel that satirizes social norms of the time." },
        { id:19, userName: "Emily", review: "Jane Austen's wit and humor shine in this enduring love story." },
        { id:20, userName: "Frank", review: "Lizzy Bennet's sharp intellect makes her one of literature's beloved heroines." },
      ],
    },
    {
      bookName: "The Hobbit",
      bookTitle: "The Hobbit",
      bookAuthor: "J.R.R. Tolkien",
      isbn: 9780345339683,
      reviews: [
        {  id:21, userName: "Grace", review: "An enchanting adventure set in the rich world of Middle-earth." },
        { id:22, userName: "Harry", review: "Bilbo Baggins' journey is a timeless tale of courage and discovery." },
        { id:23, userName: "Isabel", review: "Tolkien's world-building and storytelling make this a fantasy classic." },
      ],
    },
    {
      bookName: "The Hitchhiker's Guide to the Galaxy",
      bookTitle: "The Hitchhiker's Guide to the Galaxy",
      bookAuthor: "Douglas Adams",
      isbn: 9780345391803,
      reviews: [
        {  id:24, userName: "Jack", review: "A comedic science fiction series that explores the absurdity of the universe." },
        { id:25, userName: "Katherine", review: "Adams' wit and humor make this an enjoyable and satirical journey." },
        { id:25, userName: "Leo", review: "An intergalactic adventure with an eccentric and lovable cast of characters." },
      ],
    },
    {
      bookName: "The Grapes of Wrath",
      bookTitle: "The Grapes of Wrath",
      bookAuthor: "John Steinbeck",
      isbn: 9780143039433,
      reviews: [
        {  id:26, userName: "Mary", review: "A powerful depiction of the struggles of migrant workers during the Great Depression." },
        { id:27, userName: "Nathan", review: "Steinbeck's social commentary and storytelling evoke empathy and reflection." },
        { id:28, userName: "Olivia", review: "A classic novel that remains relevant in its exploration of social justice." },
      ],
    },
    {
      bookName: "Crime and Punishment",
      bookTitle: "Crime and Punishment",
      bookAuthor: "Fyodor Dostoevsky",
      isbn: 9780140449136,
      reviews: [
        {  id:29, userName: "Alice", review: "A psychological novel exploring the consequences of committing a crime." },
        { id:30, userName: "Bob", review: "Dostoevsky's exploration of guilt and redemption is both intense and profound." },
        { id:31, userName: "Charlie", review: "Raskolnikov's inner turmoil and moral dilemmas make this a compelling read." },
      ],
    },
    {
      bookName: "Moby-Dick",
      bookTitle: "Moby-Dick",
      bookAuthor: "Herman Melville",
      isbn: 9780142437245,
      reviews: [
        {  id:32, userName: "David", review: "A novel that delves into the obsessive quest for revenge against the white whale." },
        { id:32, userName: "Emily", review: "Melville's exploration of obsession and the sublime is both poetic and haunting." },
        { id:33, userName: "Frank", review: "A maritime epic that captures the complexities of the human spirit and nature." },
      ],
    },
    {
      bookName: "The Lord of the Rings",
      bookTitle: "The Lord of the Rings",
      bookAuthor: "J.R.R. Tolkien",
      isbn: 9780544003415,
      reviews: [
        {  id:34, userName: "Grace", review: "A high-fantasy epic that follows the quest to destroy the One Ring." },
        { id:35, userName: "Harry", review: "Tolkien's masterful world-building and mythology set the standard for fantasy." },
        { id:36, userName: "Isabel", review: "A timeless tale of friendship, heroism, and the battle between good and evil." },
      ],
    },
    {
      bookName: "Anna Karenina",
      bookTitle: "Anna Karenina",
      bookAuthor: "Leo Tolstoy",
      isbn: 9780143035008,
      reviews: [
        {  id:37, userName: "Jack", review: "A tragic love story set against the backdrop of Russian high society." },
        { id:38, userName: "Katherine", review: "Tolstoy's exploration of morality and existentialism is both profound and moving." },
        { id:39, userName: "Leo", review: "Anna's tragic fate and Levin's spiritual journey make this a rich and complex novel." },
      ],
    },
    {
      bookName: "The Odyssey",
      bookTitle: "The Odyssey",
      bookAuthor: "Homer",
      isbn: 9780143039952,
      reviews: [
        {  id:40, userName: "Mary", review: "An ancient Greek epic poem that follows the hero Odysseus on his journey home." },
        { id:41, userName: "Nathan", review: "Homer's epic is a timeless exploration of heroism, adventure, and mythology." },
        { id:42, userName: "Olivia", review: "A classic work that continues to influence literature and storytelling." },
      ],
    },
    {
      bookName: "The Brothers Karamazov",
      bookTitle: "The Brothers Karamazov",
      bookAuthor: "Fyodor Dostoevsky",
      isbn: 9780374528379,
      reviews: [
        {  id:43, userName: "Alice", review: "A philosophical novel exploring morality, faith, and the nature of existence." },
        { id:44, userName: "Bob", review: "Dostoevsky's complex characters and ideas make this a challenging but rewarding read." },
        { id:45, userName: "Charlie", review: "An exploration of the human condition and the search for meaning." },
      ],
    },
    {
      bookName: "Wuthering Heights",
      bookTitle: "Wuthering Heights",
      bookAuthor: "Emily Brontë",
      isbn: 9780141439556,
      reviews: [
        {  id:46, userName: "David", review: "A Gothic novel that explores themes of love, revenge, and social class." },
        { id:47, userName: "Emily", review: "Brontë's dark and atmospheric tale is a haunting exploration of passion and despair." },
        { id:48, userName: "Frank", review: "Heathcliff and Catherine's tragic love story is a literary classic." },
      ],
    },
    {
      bookName: "Frankenstein",
      bookTitle: "Frankenstein",
      bookAuthor: "Mary Shelley",
      isbn: 9780141439471,
      reviews: [
        {  id:49, userName: "Grace", review: "A classic work of Gothic fiction that explores the consequences of playing god." },
        { id:50, userName: "Harry", review: "Shelley's exploration of science, ethics, and the human condition is timeless." },
        { id:51, userName: "Isabel", review: "Frankenstein's monster is a symbol of the dangers of unchecked scientific ambition." },
      ],
    },
    {
      bookName: "The Picture of Dorian Gray",
      bookTitle: "The Picture of Dorian Gray",
      bookAuthor: "Oscar Wilde",
      isbn: 9780486278070,
      reviews: [
        {  id:49, userName: "Jack", review: "A novel that examines the moral decay of a young man influenced by hedonism." },
        { id:50, userName: "Katherine", review: "A thought-provoking exploration of the consequences of aestheticism and vanity." },
        { id:51, userName: "Leo", review: "Wilde's wit and social commentary make this a captivating and unsettling story." },
      ],
    },
    {
      bookName: "Don Quixote",
      bookTitle: "Don Quixote",
      bookAuthor: "Miguel de Cervantes",
      isbn: 9780060934347,
      reviews: [
        {  id:52, userName: "Mary", review: "A classic work that satirizes chivalric romance and explores the nature of reality." },
        { id:53, userName: "Nathan", review: "Cervantes' humorous and philosophical masterpiece is a literary landmark." },
        { id:54, userName: "Olivia", review: "Don Quixote's quest and Sancho Panza's pragmatism create a dynamic narrative." },
      ],
    },
    {
      bookName: "The Count of Monte Cristo",
      bookTitle: "The Count of Monte Cristo",
      bookAuthor: "Alexandre Dumas",
      isbn: 9780140449267,
      reviews: [
        {  id:55, userName: "Alice", review: "A tale of revenge, betrayal, and redemption that captivates from start to finish." },
        { id:56, userName: "Bob", review: "Dumas' swashbuckling adventure is a timeless classic of historical fiction." },
        { id:57, userName: "Charlie", review: "Edmond Dantès' transformation is a compelling and satisfying narrative." },
      ],
    },
    {
      bookName: "The War of the Worlds",
      bookTitle: "The War of the Worlds",
      bookAuthor: "H.G. Wells",
      isbn: 9780141441030,
      reviews: [
        {  id:58, userName: "David", review: "A pioneering work of science fiction that explores the consequences of alien invasion." },
        { id:59, userName: "Emily", review: "Wells' narrative of Martian invaders is a seminal work in the sci-fi genre." },
        { id:60, userName: "Frank", review: "A suspenseful and thought-provoking exploration of extraterrestrial conflict." },
      ],
    },
    {
      bookName: "The Three Musketeers",
      bookTitle: "The Three Musketeers",
      bookAuthor: "Alexandre Dumas",
      isbn: 9780140440257,
      reviews: [
        {  id:61, userName: "Grace", review: "A swashbuckling adventure that follows the exploits of D'Artagnan and the Musketeers." },
        { id:62, userName: "Harry", review: "Dumas' tale of friendship, loyalty, and honor is a classic of historical fiction." },
        { id:63, userName: "Isabel", review: "The Musketeers' camaraderie and daring escapades make this a timeless story." },
      ],
    }]








     const userList = [
        {
          userName: "Grace",
          userId: 62,
          email: "grace@gmail.com",
        },
        {
          userName: "Alice",
          userId: 77,
          email: "alice@example.com",
        },
        {
          userName: "Bob",
          userId: 67,
          email: "bob@example.com",
        },
        {
          userName: "Charlie",
          userId: 68,
          email: "charlie@example.com",
        },
        {
          userName: "David",
          userId: 92,
          email: "david@example.com",
        },
        {
          userName: "Emily",
          userId: 98,
          email: "emily@example.com",
        },
        {
          userName: "Frank",
          userId: 71,
          email: "frank@example.com",
        },
        {
          userName: "Grace",
          userId: 75,
          email: "grace@example.com",
        },
        {
          userName: "Harry",
          userId: 78,
          email: "harry@example.com",
        },
     
      ];
      


      module.exports={userList,books}