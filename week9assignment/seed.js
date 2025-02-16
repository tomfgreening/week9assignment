// CREATE TABLE IF NOT EXISTS users (
//     id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     clerk_id BIGINT NOT NULL,
//     user_name VARCHAR(100) NOT NULL,
//     email VARCHAR(255) NOT NULL,
//     password VARCHAR(999) NOT NULL
//   );

//   CREATE TABLE IF NOT EXISTS posts (
//     id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     post_title VARCHAR(100) NOT NULL,
//     post_date TIMESTAMP NOT NULL,
//     post_body VARCHAR(255) NOT NULL,
//     user_id INT REFERENCES users(id)
//   );

// /INSERT INTO users (clerk_id, user_name, email, password)
// VALUES (1001, 'tommygee', 'tomfgreening@gmail.com', 'p@ssw0r499');

// INSERT INTO users (clerk_id, user_name, email, password)
// VALUES (1002, 'juicyjake', 'juicy@jake.com', 'juicypassw0r498');

// INSERT INTO users (clerk_id, user_name, email, password)
// VALUES (1003, 'sillysalmon', 'silly@slamon.com', 'sillypassword99');

// INSERT INTO posts (post_title, post_date, post_body, user_id)
// VALUES ('Is this thing on?', NOW(), 'Well, is it?', 1001);

// INSERT INTO posts (post_title, post_date, post_body, user_id)
// VALUES ('Interesting title', NOW(), 'hmmmmmmm, i am undecided on wether or not I like this social network.', 1002);

// INSERT INTO posts (post_title, post_date, post_body, user_id)
// VALUES ('Woof', NOW(), 'I am a dog, yet I have managed to type on a keyboard!', 1003);

// SELECT posts.post_title, posts.post_body, users.user_name
// FROM posts
// JOIN users ON posts.user_id = users.clerk_id;

// ALTER TABLE users 
// ADD bio VARCHAR (255),
// ADD date_of_birth DATE,
// ADD fav_number BIGINT
