import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import "./Site.scss";

const Site = ({ site, number }) => {
  const [objectData, setObjectData] = useState(null);
  const [visited, setVisited] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    if (site) {
      setObjectData(site);
      setVisited(site.visited);
      setLiked(site.liked);
      setDisliked(site.disliked);
      setLikes(site.likes);
      setDislikes(site.dislikes);
    }
  }, [site]);

  const handleLike = () => {
    if (!visited) return;
    if (!liked) {
      setLikes(likes + 1);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  const handleDislike = () => {
    if (!visited) return;
    if (!disliked) {
      setDislikes(dislikes + 1);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
    } else {
      setDislikes(dislikes - 1);
    }
    setDisliked(!disliked);
  };

  const toggleVisited = () => {
    setVisited(!visited);
    if (!visited) {
      setLiked(false);
      setDisliked(false);
    }
  };

  return (
    <div className="object-container">
      {objectData ? (
        <>
          <h1>
            {number}. {objectData.name}
          </h1>

          <div className="object-details">
            <div className="object-info">
              <p>City: {objectData.city}</p>
              <p>Department: {objectData.code_departement}</p>
              {!!objectData.description && (
                <p>Description: {objectData.description}</p>
              )}
              {!!objectData.historical_context && (
                <p>Historical Context: {objectData.historical_context}</p>
              )}
            </div>
          </div>

          <span>
            How do I get there?{" "}
            <a
              target="_blank"
              href={`https://www.google.com/maps?q=${objectData.latitude},${objectData.longitude}`}
            >
              Itinerary
            </a>
          </span>

          <div className="likeOrDislike">
            <p>Visité ?</p>
            <input checked={visited} type="checkbox" onChange={toggleVisited} />
          </div>

          <div className="likeOrDislike">
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                cursor: visited ? "pointer" : "not-allowed",
                opacity: visited ? 1 : 0.5,
              }}
            >
              <AiOutlineLike
                color={visited && liked ? "blue" : "gray"}
                onClick={handleLike}
              />
              {likes}
            </span>

            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                cursor: visited ? "pointer" : "not-allowed",
                opacity: visited ? 1 : 0.5,
              }}
            >
              <AiOutlineDislike
                color={visited && disliked ? "red" : "gray"}
                onClick={handleDislike}
              />
              {dislikes}
            </span>
          </div>
        </>
      ) : (
        <div className="skeleton">
          <div className="title"></div>
          <div className="details detail1"></div>
          <div className="details detail2"></div>
          <div className="details detail3"></div>
        </div>
      )}
    </div>
  );
};

export default Site;
