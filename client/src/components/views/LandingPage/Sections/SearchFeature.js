import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchFeature(props) {
  const [SearchTerms, setSearchTerms] = useState("");

  const onChangeSearch = event => {
    setSearchTerms(event.currentTarget.value);

    props.refreshFunction(event.currentTarget.value);
  };

  return (
    <div style={{ margin: "8px 0" }}>
      <Search
        type="text"
        size="large"
        value={SearchTerms}
        onChange={onChangeSearch}
        placeholder="Search By Typing..."
      />
    </div>
  );
}

export default SearchFeature;
