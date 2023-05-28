import React, { useMemo } from 'react';
import { TextInput } from 'react-native';
import styles from './SearchInput.styles';

interface SearchInputProps {
  handleSearch: (text: string) => void;
  searchQuery: string;
}

const SearchInput: React.FC<SearchInputProps> = React.memo(
  ({ handleSearch, searchQuery }) => {
    const memoizedHandleSearch = useMemo(() => handleSearch, [handleSearch]);

    return (
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={memoizedHandleSearch}
        value={searchQuery}
      />
    );
  }
);

export default SearchInput;
