import React from 'react';
import { TextInput } from 'react-native';
import styles from './SearchInput.styles';

interface SearchInputProps {
  handleSearch: (text: string) => void;
  searchQuery: string;
}

const SearchInput: React.FC<SearchInputProps> = React.memo(
  ({ handleSearch, searchQuery }) => {
    return (
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
    );
  }
);

export default SearchInput;
