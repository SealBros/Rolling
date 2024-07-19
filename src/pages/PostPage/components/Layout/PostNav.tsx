import React from "react";
import ShareButton from "../UI/ShareButton";
import ToNameContent from "../UI/ToNameContent";
import ToMessageCount from "../UI/ToMessageCount";
import PostNavContainer from "../UI/PostNavContainer";
import ToEmojiCount from "../UI/ToEmojiCount";
import PostNavTitleContainer from "../UI/PostNavTitleContainer";

const PostNav: React.FC = () => {
  return (
    <div>
      <PostNavContainer className={"block md:hidden"} justifyName="">
        <ToNameContent />
      </PostNavContainer>
      <PostNavContainer
        justifyName={"justify-end md:justify-between"}
        className=""
      >
        <ToNameContent className={"hidden md:block"} />
        <PostNavTitleContainer>
          <ToMessageCount />
          <ToEmojiCount />
          <ShareButton url={""} />
        </PostNavTitleContainer>
      </PostNavContainer>
    </div>
  );
};

export default PostNav;
