import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validatros';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  };
  return (
    <div className={style.postsBlock}>
      <h3>My Posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength10]}
          component={Textarea}
          name="newPostText" />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);


export default MyPosts;