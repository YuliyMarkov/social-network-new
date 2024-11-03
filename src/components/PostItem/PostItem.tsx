import { StyledPost } from "../UI/Post/Post.style";

interface IPostProps {
  userName: string;
  regDate: string;
  postText: string;
  isLiked?: boolean;
  isMarked?: boolean;
}

export const PostItem = ({
  userName,
  regDate,
  postText,
  isLiked,
  isMarked,
}: IPostProps) => {
  return (
    <StyledPost $isLiked={isLiked} $isMarked={isMarked}>
      <div className="Post">
        <div className="UserElem">
          <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
          <div className="user__description">
            <a href="#" className="main__text">
              {userName}
            </a>
            <p className="secondary__text">{regDate}</p>
          </div>
        </div>
        <p className="Post__text">{postText}</p>
        <div className="media-container">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img
              key={num}
              className="media__item"
              src={`./img/post/nature-${num}.png`}
              alt="Post Item"
            />
          ))}
        </div>
        <div className="PostControls">
          <div className="icon-wrapper like">
            <span className="count likes-count">-500</span>
            <svg
              className="icon icon-like"
              viewBox="0 0 23 23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="icon"
                d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
              />
            </svg>
          </div>
        </div>
        <div className="CommentBlock">
          <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
          <div className="comment__description">
            <a href="#" className="comment__owner">
              Карина Савина
            </a>
            <p className="comment__text">Это текст комментария...</p>
            <a href="#" className="reply">
              Ответить
            </a>
          </div>
          <span className="date">25 марта</span>
          <svg
            className="icon icon-like"
            viewBox="0 0 23 23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="icon"
              d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
            />
          </svg>
        </div>
        <svg
          className="icon icon-more"
          viewBox="0 0 25 5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="more">
            <circle id="ellipse" cx="22.5" cy="2.5" r="2.5" />
            <circle id="ellipse_2" cx="12.5" cy="2.5" r="2.5" />
            <circle id="ellipse_3" cx="2.5" cy="2.5" r="2.5" />
          </g>
        </svg>
      </div>
    </StyledPost>
  );
};
