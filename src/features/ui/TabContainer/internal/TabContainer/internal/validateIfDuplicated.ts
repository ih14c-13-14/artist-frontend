import { LogicException } from '@/error';

type Item = { value: string };

const is2DArray = (
  items: ReadonlyArray<Item> | ReadonlyArray<ReadonlyArray<Item>>
): items is ReadonlyArray<ReadonlyArray<Item>> => {
  return Array.isArray(items[0]);
};

const validateIfDuplicated = ({
  items,
}: {
  items: ReadonlyArray<Item> | ReadonlyArray<ReadonlyArray<Item>>;
}) => {
  let flatItems: ReadonlyArray<Item>;

  if (is2DArray(items)) {
    flatItems = items.flat();
  } else {
    flatItems = items;
  }

  const occurrences = new Set<string>();
  const duplications = new Set<string>();
  flatItems.forEach(item => {
    if (occurrences.has(item.value)) {
      duplications.add(item.value);
    }

    occurrences.add(item.value);
  });

  if (duplications.size > 0) {
    throw new LogicException(
      `Item value must be unique. Duplications: ${[...duplications].join(', ')}`
    );
  }
};

export default validateIfDuplicated;
