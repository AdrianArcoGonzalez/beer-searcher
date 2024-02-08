import { Skeleton } from "@mui/material";
import BeerSkeletonStyled from "./BeerSkeletonStyled";

const BeerSkeleton = () => {
  return (
    <BeerSkeletonStyled aria-label="skeleton">
      <div className="skeleton-container__mobile">
        <Skeleton variant="text" width={120} height={40} />
        <Skeleton variant="rectangular" width={70} height={180} />
        <Skeleton variant="text" width={260} height={250} />
      </div>
      <div className="skeleton-container__desktop">
        <Skeleton variant="text" width={100} height={40} />
        <Skeleton variant="rectangular" width={70} height={180} />
        <Skeleton variant="text" width={480} height={250} />
      </div>
    </BeerSkeletonStyled>
  );
};

export default BeerSkeleton;
