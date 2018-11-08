class Search {
    searchLinks = [
        {
            name: "Google Classroom",
            linkOptions: ["https://classroom.google.com/u/1/h"],
            searchQueries: [
                "classroom", "classroom.google.com"
            ]
        },
        {
            name: "Google Drive",
            linkOptions: ["https://drive.google.com/drive/u/0", "https://drive.google.com/drive/u/1"],
            searchQueries: [
                "drive", "drive.google.com"
            ]
        },
        {
            name: "Google Mail",
            linkOptions: ["https://mail.google.com/u/0", "https://mail.google.com/u/1"],
            searchQueries: [
                "mail", "gmail", "email"
            ]
        }
    ]

    autocompleteSearch(search) {
        let found = [];
        if (search.length == 0) return found;
        if (search.match(/^((http:\/\/|https:\/\/)?([a-z|A-Z]+)\.?([a-z|A-Z]+)\.([a-z|A-Z]+))$/)) {
            console.log("TRUE");
            return [search, true];
        }
        this.searchLinks.map((searchLink) => {
            let addedSearchFilter = false
            searchLink.searchQueries.filter((query) => {
                let indexOf = query.indexOf(search);
                let indexOfOpposite = search.indexOf(query);
                if (indexOf > -1 && !addedSearchFilter) {
                    found.push(searchLink);
                    addedSearchFilter = true;
                }
                else if (!addedSearchFilter && indexOf == -1 && indexOfOpposite != -1) {
                    found.push(searchLink);
                    addedSearchFilter = true;
                }
            })
        })
        return found;
    }
}

const search = new Search();

export default search;