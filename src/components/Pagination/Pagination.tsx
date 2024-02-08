import Button from "../Button/Button";
import PaginationStyled from "./PaginationStyled";

interface PaginationPropsStructure {
  nextPageAction: () => void;
  previousPageAction: () => void;
  page: number;
  previousDisabled: boolean;
  nextDisabled: boolean;
}

const Pagination = ({
  page,
  nextPageAction,
  previousPageAction,
  previousDisabled,
  nextDisabled,
}: PaginationPropsStructure) => {
  return (
    <PaginationStyled aria-label="pagination">
      <Button
        aria-label="previous"
        action={previousPageAction}
        text="Previous Page"
        disabled={previousDisabled}
      />
      <span className="page">{page}</span>
      <Button
        aria-label="next"
        action={nextPageAction}
        text="Next Page"
        disabled={nextDisabled}
      />
    </PaginationStyled>
  );
};
export default Pagination;
