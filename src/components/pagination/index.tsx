import { IconButton, Stack, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import {
  MdArrowLeft,
  MdArrowRight,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import { PaginationItem } from "./PaginationItem";

interface Props {
  qtdPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export function Pagination({ qtdPages, currentPage, setCurrentPage }: Props) {
  const pages = [] as number[];

  for (let index = 1; index < qtdPages + 1; index++) {
    pages.push(index);
  }
  const onChangeNumber = (number: number) => {
    setCurrentPage(number);
  };

  const decrementNumber = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const incrementNumber = () => {
    if (currentPage < qtdPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const firstNumber = () => {
    setCurrentPage(1);
  };

  const lastNumber = () => {
    setCurrentPage(qtdPages);
  };

  return (
    <Stack
      direction={"row"}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <IconButton
        variant={"link"}
        aria-label="increment"
        color={"black.100"}
        icon={<MdSkipPrevious size={25} />}
        onClick={firstNumber}
        disabled={currentPage === 1}
      />
      <IconButton
        variant={"link"}
        aria-label="increment"
        color={"black.100"}
        icon={<MdArrowLeft size={30} />}
        onClick={decrementNumber}
        disabled={currentPage === 1}
      />

      <Stack alignItems={"center"} direction="row" spacing="2">
        {pages.map((item) => {
          if (item <= 5) {
            return (
              <PaginationItem
                key={item}
                number={item}
                isCurrent={currentPage === item}
                onChangeNumber={onChangeNumber}
              />
            );
          }

          if (item === currentPage && currentPage < qtdPages) {
            return (
              <>
                {currentPage - 1 !== 5 && <Text>...</Text>}

                <PaginationItem
                  key={item}
                  number={item}
                  isCurrent={currentPage === item}
                  onChangeNumber={onChangeNumber}
                />
                {currentPage + 1 !== qtdPages && <Text>...</Text>}
              </>
            );
          }

          if (item === qtdPages) {
            return (
              <>
                {currentPage < 6 && <Text>...</Text>}
                <PaginationItem
                  key={item}
                  number={item}
                  isCurrent={currentPage === item}
                  onChangeNumber={onChangeNumber}
                />
              </>
            );
          }
        })}
      </Stack>
      <IconButton
        variant={"link"}
        aria-label="increment"
        color={"black.100"}
        icon={<MdArrowRight size={30} />}
        onClick={incrementNumber}
        disabled={currentPage === qtdPages}
      />
      <IconButton
        variant={"link"}
        aria-label="increment"
        color={"black.100"}
        icon={<MdSkipNext size={25} />}
        onClick={lastNumber}
        disabled={currentPage === qtdPages}
      />
    </Stack>
  );
}
