import React from "react";

const Discussions = ({ title, discussions }) => (
  <div className="card blog-comments">
    <div className="card-header border-bottom">
      <h6 className="m-0">{title}</h6>
    </div>

    <div className="card-body p-0">
      {discussions.map((discussion, idx) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
            <img src={discussion.author.image} alt={discussion.author.name} />
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={discussion.author.url}>
                {discussion.author.name}
              </a>{" "}
              on{" "}
              <a className="text-secondary" href={discussion.post.url}>
                {discussion.post.title}
              </a>
              <span className="text-mutes">- {discussion.date}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <div className="button-group">
                <button className="btn btn-white">
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{" "}
                  Approve
                </button>
                <button className="btn btn-white">
                  <span className="text-danger">
                    <i className="material-icons">clear</i>
                  </span>{" "}
                  Reject
                </button>
                <button className="btn btn-white">
                  <span className="text-light">
                    <i className="material-icons">more_vert</i>
                  </span>{" "}
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="card-footer border-top">
      <div className="row">
        <div className="text-center view-report">
          <button className="btn btn-white" type="submit">
            View All Comments
          </button>
        </div>
      </div>
    </div>
  </div>
);


export default Discussions;