let hulu = {
    id: 1,
    movies: [
            {
                title: "Codewoes",
                genre: ["Drama", "Suspense"],
                rating: "R",
                run_time: 160,
                release_year: 2022
            },
            {
                title:   "My Abilities",
                genre: ["Comedy", "Horror"],
                rating: "Laughable",
                run_time: 180,
                release_year: 2023,
            }
            ],
    shows: 
        [
            {
            title: "Archer",
            Number_of_seasons: 14,
            seasons: [
                            {
                            season: 1,
                            episode_count: 10,
                            episodes:[
                                    {
                                        episode_title: "Mole Hunt (AKA Pilot)",
                                        air_date: "2010-1-12",
                                    },
                                    {
                                        episode_title: "Training Day",
                                        air_date: "2010-1-12",
                                    }
                                    ]   
                            },
                            {
                            season: 13,
                            episode_count: 8,
                            episodes:[
                                    {
                                        episode_title: "The Big Con",
                                        air_date: "2022-08-24",
                                    },
                                    {
                                        episode_title: "Operation: Fang",
                                        air_date: "2022-08-31",
                                    },
                                    ]
                            }
                        ]
                    }
        ]
}
        
            



//console.log(hulu.shows[0].seasons[1].episodes[0].episode_title);


