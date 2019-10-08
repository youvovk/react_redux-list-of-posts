import React from 'react';
import EnhancedPostList from './components/PostList/PostListHandle';

import './App.css';

class App extends React.Component {
  state = {};

  render() {
    const {
      receivePosts,
      isLoading,
      hasError,
      isInitialized,
      addTextForFilter,
      templateForFilter,
      sortPosts,
      resetFilter,
    } = this.props;

    if (isLoading) {
      return <p className="loading">Loading...</p>;
    }

    if (hasError) {
      return (
        <>
          <h1 className="app__title">You want to upload again.</h1>
          <button
            type="button"
            className="btn btn-warning load load-again"
            onClick={receivePosts}
          >
            Load again
          </button>
        </>
      );
    }

    if (!isInitialized) {
      return (
        <>
          <h1 className="app__title">Want to upload a list of posts?</h1>
          <button
            type="button"
            className="btn btn-primary load"
            onClick={receivePosts}
          >
            Load
          </button>
        </>
      );
    }

    return (
      <div className="app">
        <h1 className="app__title">Static list of posts</h1>
        <form onSubmit={event => sortPosts(event)}>
          <input
            onChange={event => addTextForFilter(event.target.value)}
            value={templateForFilter}
            type="text"
            className="text-template"
          />
        </form>
        <button
          onClick={resetFilter}
          type="button"
          className="button_reset btn btn-primary load"
        >
          Reset
        </button>
        <EnhancedPostList />
      </div>
    );
  }
}

export default App;