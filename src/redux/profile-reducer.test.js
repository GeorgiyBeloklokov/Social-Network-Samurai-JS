import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
let state = {
    posts: [
        {id: 1, message: 'Hi, i im funnnnnny', likesCount: 55},
        {id: 2, message: 'hello, its my first post', likesCount: 40},
        {id: 3, message: 'balablabla', likesCount: 30},
        {id: 4, message: 'yoyoyoy', likesCount: 60},
    ]
};

it('length of  posts should be incremented', () => {
    let action =addPostActionCreator("Georgiy");
// 1 -- test data

// 2 -- action
    let newState = profileReducer(state, action);

//3 -- expectation
     expect(newState.posts.length).toBe(5);

});



it ('after deleting length of messages should be decrtement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state,action);


expect(newState.posts.length).toBe(3);

});


it ('after deleting length of posts  shouldnt  be decrtement if id is incorrect', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state,action);


expect(newState.posts.length).toBe(4);

});