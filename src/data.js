
export function getPortfolioItems(success) {
    return (
        fetch('portfolioItems.json')
            .then(res => {
                if (res.status >= 200) {
                    return Promise.resolve(res)
                } else {
                    return Promise.reject(new Error(res.statusText))
                }
            })
            .then(res => res.json())
            .then(success)
            .catch(error => console.log(error))
    )
}

export function getPortfolioItem(id, success) {
    return (
        fetch(id +'.json')
            .then(res => {
                if (res.status >= 200) {
                    return Promise.resolve(res)
                } else {
                    return Promise.reject(new Error(res.statusText))
                }
            })
            .then(res => res.json())
            .then(success)
            .catch(error => console.log(error))
    )
}