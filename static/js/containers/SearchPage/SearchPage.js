import React from "react";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import {
    PLAYER_DATA
} from "../../utilities/ApplicationData";

import {
    isArrayEmpty,
    isObjectEmpty,
    isStringEmpty
} from '../../utilities/CommonMethods';

import classes from './SearchPage.module.css';

class SearchPage extends React.Component {
    state = {
        searchParam: "",
        searchResults: [],
    }

    updateSearchResults = () => {
        if (!isObjectEmpty(this.props.location) && !isStringEmpty(this.props.location.search)) {
            const searchStr = this.props.location.search.split("=")[1];

            const playerData = this.props.playerData;
            const searchResults = playerData.filter(item => {
                return item.playerName.toLocaleLowerCase().includes(searchStr.toLocaleLowerCase());
            })
            this.setState({
                searchParam: searchStr,
                searchResults: searchResults
            });
        } else {
            this.setState({
                searchParam: "",
                searchResults: []
            });
        }
    }

    componentDidMount() {
        this.updateSearchResults();
    }

    componentDidUpdate(prevProps) {
        if (!isObjectEmpty(prevProps.location) && !isStringEmpty(prevProps.location.search) && prevProps.location.search !== this.props.location.search) {
            this.updateSearchResults();
        }
    }

    render() {
        return ( <
            div className = {
                classes.MainContainer
            } >
            <
            h1 > Search results
            for: {
                this.state.searchParam
            } < /h1> <
            div className = {
                classes.SearchResultGrid
            } > {
                this.state.searchResults.map(item => {
                    return ( <
                        PlayerCard { ...item
                        }
                        />
                    )
                })
            }

            {
                !isArrayEmpty(this.state.searchResults) ? null :
                    <
                    h3 className = {
                        classes.NoResults
                    } > No Results Found < /h3>
            } <
            /div> <
            /div>
        );
    }
}

export default SearchPage;