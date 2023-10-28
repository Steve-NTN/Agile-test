import { Box, Rating, Stack, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { apiGetComments } from "services/comment";
import { CommentType } from "types/comment";

type Props = {
  productId?: number;
};

const Comments = (props: Props) => {
  const { productId } = props;
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    apiGetComments(productId)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <Stack spacing={2}>
      <Typography className="title">Đánh giá từ người mua</Typography>
      {comments.length < 1 && <Typography>Trống</Typography>}
      {comments.map((comment, id) => (
        <CommentBox key={id}>
          <Stack direction="row" spacing={2} className="top">
            <img alt="img" src={comment?.user?.image} />
            <Box>
              <Typography>{comment?.user?.name}</Typography>
              <Rating value={comment.rating} readOnly />
            </Box>
          </Stack>

          <Typography>{comment.description}</Typography>
          {comment.image && (
            <img src={comment?.image} alt="img" className="img" />
          )}
        </CommentBox>
      ))}
    </Stack>
  );
};

const CommentBox = styled(Box)({
  "& .top": {
    marginBottom: 16,
    alignItems: "center",
    "& img": {
      width: 32,
      height: 32,
      objectFit: "cover",
      borderRadius: "50%",
      boxShadow: "2px 2px 2px #ddd, -2px -2px 2px #ddd",
    },
    "& .MuiRating-root": {
      fontSize: 14,
    },
  },
  "& .img": {
    width: 64,
    borderRadius: 8,
    height: 64,
  },
});

export default Comments;
