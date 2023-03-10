import { useHistory, useLocation } from "react-router-dom";
import Input from "../../../Input";
import searchQueryParamName from "../TaskList/searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import { Wrapper } from "./styled";

export default () => {
    const query = useQueryParameter("szukaj");
    const replaceQueryParamter = useReplaceQueryParameter();

    const onInputSearch = ({ target }) => {
        replaceQueryParamter({
            key: "szukaj",
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
    <Wrapper>
            <Input 
            placeholder="Filtruj zadania"
            value={query || ""}
            onChange={onInputSearch}
        />
    </Wrapper>
    )
};