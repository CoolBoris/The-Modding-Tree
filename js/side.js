
// A side layer with achievements, with no prestige
addLayer("a", {
    resource: "Achievements", 
    startData() { return {
        unlocked: true,
        points: new Decimal(0)
    }},
    color: "yellow",
    symbol: "🏆",
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Achievements")
    },
    tabFormat: {
        "Achievements": {
            content: [
                ["display-text",
                    function() { return player.a.points + '/26 Achievements' },
                    { "color": "gold", "font-size": "32px",}],
            "blank",
            ["display-text",
                'Achievements contain spoilers!',
                { "color": "red", "font-size": "18px",}],
                "blank",
            "achievements",
        ],
        },
  },

    achievementPopups: true,
    achievements: {
        11: {
            name: "ROCKET FUEL!",
            done() {return player.r.points.gte(1)},
            tooltip: "1 Rocket Fuel",
            goalTooltip: "Get 1 Rocket Fuel", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)},
            style() {
                return {
                "border-color": "#97192E",
                "border-width": "3px"
                }
            }
        },
        12: {
            name: "weak upgrade",
            done() {return (hasUpgrade("r", 22))},
            tooltip: "Rocket Fuel Upgrade 7",
            goalTooltip: "Buy Rocket Fuel Upgrade 7", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        13: {
            name: "thousandaire",
            done() {return player.points.gte(1000)},
            tooltip: "1,000 Money",
            goalTooltip: "Get 1,000 Money", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        14: {
            name: "Rocket engineer!",
            done() {return player.ro.points.gte(1)},
            tooltip: "1 Rocket",
            goalTooltip: "Get 1 Rocket", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)},
            style() {
                return {
                "border-color": "#6D6D6D",
                "border-width": "3px"
                }
            }
        },
        15: {
            name: "Automation!",
            done() {return player.ro.points.gte(4)},
            tooltip: "Rocket Milestone 4",
            goalTooltip: "Get Rocket Milestone 4", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        16: {
            name: "Rocket Fuel Millionaire",
            done() {return player.r.points.gte(1000000)},
            tooltip: "1,000,000 Rocket Fuel",
            goalTooltip: "Get 1,000,000 Rocket Fuel", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        21: {
            name: "Scientific Notation",
            done() {return player.points.gte(1e9)},
            tooltip: "1e9 Money",
            goalTooltip: "Get 1e9 Money", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        22: {
            name: "welcome to the worst feature!",
            done() {return player.as.points.gte(1)},
            tooltip: "1 Astronaut",
            goalTooltip: "Get 1 Astronaut", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)},
            style() {
                return {
                "border-color": "#EFEFEF",
                "border-width": "3px"
                }
            }
        },
        23: {
            name: "(Softcapped)",
            done() {return player.as.points.gte(10000)},
            tooltip: "10,000 Astronauts",
            goalTooltip: "Get 10,000 Astronauts", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        24: {
            name: "Astronauts pro",
            done() {return player.as.points.gte(500000)},
            tooltip: "Astronaut Milestone 2",
            goalTooltip: "Get Astronaut Milestone 2", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        25: {
            name: "More RF Upgrades",
            done() {return hasMilestone("ro", 16)},
            tooltip: "Rocket Milestone 16",
            goalTooltip: "Get Rocket Milestone 16", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        26: {
            name: "and leaving Earth!",
            done() {return player.s.points.gte(1)},
            tooltip: "Space Reset",
            goalTooltip: "Trigger the Space reset", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)},
            style() {
                return {
                "border-color": "#AC00AC",
                "border-width": "3px"
                }
            }
        },
        31: {
            name: "almost at the end",
            done() {return player.s.points.gte(100)},
            tooltip: "100 Space Distance",
            goalTooltip: "Get 100 Space Distance", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        32: {
            name: "almost at the end²",
            done() {return player.s.points.gte(10000)},
            tooltip: "10000 Space Distance",
            goalTooltip: "Get 10000 Space Distance", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        33: {
            name: "yaay more rf!",
            done() {return (hasMilestone("ro", 16))},
            tooltip: "Rocket Milestone 16",
            goalTooltip: "Get Rocket Milestone 16", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        34: {
            name: "final steps ...",
            done() {return player.r.points.gte(1e50)},
            tooltip: "1e50 Rocket Fuel",
            goalTooltip: "Get 1e50 Rocket Fuel", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        35: {
            name: "woah 2 features?",
            done() {return (hasMilestone("ro", 20))},
            tooltip: "Rocket Milestone 20",
            goalTooltip: "Get Rocket Milestone 20", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        36: {
            name: "Super Mega",
            done() {return (hasUpgrade("s", 42))},
            tooltip: "Space Distance Upgrade 10",
            goalTooltip: "Get Space Distance Upgrade 10", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        41: {
            name: "tough decision 1",
            done() {return player.c.points.gte(1)},
            tooltip: "1 Comet",
            goalTooltip: "Get 1 Comet", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)},
            style() {
                return {
                "border-color": "#2D6CD3",
                "border-width": "3px"
                }
            }
        },
        42: {
            name: "tough decision 2",
            done() {return player.ast.points.gte(1)},
            tooltip: "1 Asteroid",
            goalTooltip: "Get 1 Asteroid", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)},
            style() {
                return {
                "border-color": "#F1DD4A",
                "border-width": "3px"
                }
            }
        },
        43: {
            name: "What is your favorite?",
            done() {return player.ast.points.gte(20) || player.c.points.gte(20)},
            tooltip: "20 Asteroids or 20 Comets",
            goalTooltip: "Get 20 Asteroids or 20 Comets", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        44: {
            name: "No crash yet?",
            done() {return player.c.points.gte(50000)},
            tooltip: "50,000 Comets",
            goalTooltip: "Get 50,000 Comets", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        45: {
            name: "Millionoid",
            done() {return player.ast.points.gte(1e6)},
            tooltip: "1,000,000 Comets",
            goalTooltip: "Get 1,000,000 Asteroids", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        46: {
            name: "Super Mega Ultra",
            done() {return hasUpgrade("s", 51)},
            tooltip: "Space Distance Upgrade 21",
            goalTooltip: "Get Space Distance Upgrade 21", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        51: {
            name: "Research",
            done() {return hasChallenge("c", 11)},
            tooltip: "Halley's Comet",
            goalTooltip: "Complete Halley's Comet", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
        52: {
            name: "Finished",
            done() {return hasChallenge("ast", 14)},
            tooltip: "Asteroid Ceres",
            goalTooltip: "Complete Asteroid Ceres", // Shows when achievement is not completed
            onComplete() {addPoints("a",1)}
        },
    },
},)

addLayer("sa", {
    resource: "Secret Achievements", 
    startData() { return {
        unlocked: true,
        points: new Decimal(0)
    }},
    color: "#3E3E3E",
    symbol: "🏆",
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Secret Achievements")
    },
    tabFormat: {
        "Secret Achievements": {
            content: [
                ["display-text",
                    function() { return player.sa.points + '/8 Secret Achievements' },
                    { "color": "#3E3E3E", "font-size": "32px",}],
            "blank",
            ["display-text",
                'some Secret Achievements may not be obtainable anymore after a while',
                { "color": "red", "font-size": "13px",}],
                "blank",
            "achievements",
         ],
     },
  },

    achievementPopups: true,
    achievements: {
        11: {
            name: "the first one is always free",
            done() {return player.sa.points.gte(0)},
            tooltip: "free secret achievement",
            onComplete() {addPoints("sa",1)},
            goalTooltip: "you can't see me?", // Shows when achievement is not completed
        },
        12: {
            name: "fruity",
            done() {
                if (options.theme == "strawberry") {
                   return true
                }
            },
            tooltip: "switch the theme",
            onComplete() {addPoints("sa",1)},
            goalTooltip: "fruity", // Shows when achievement is not completed
        },
        13: {
            name: "last",
            done() {
                if (options.theme == "blackberry") {
                   return true
                }
            },
            tooltip: "go through all the themes",
            onComplete() {addPoints("sa",1)},
            goalTooltip: "actually defualt", // Shows when achievement is not completed
        },
        14: {
            name: "251 sd",
            done() {return player.s.points.gte(251)},
            tooltip: "251 Space Distance",
            onComplete() {addPoints("sa",1)},
            goalTooltip: "abbreviation", // Shows when achievement is not completed
        },
    15: {
        name: "Endgame.",
        done() {return player.points.gte(1e104)},
        tooltip: "You beat the game! congrats!",
        onComplete() {addPoints("sa",1)},
        goalTooltip: "Beat the game (changes every update)", // Shows when achievement is not completed
    },
    21: {
        name: "Mega Endgame",
        done() {return player.points.gte(1e108)},
        tooltip: "You went even further even tho you already finished the game.. yay? (Reward: Infinity)",
        onComplete() {addPoints("sa",1)},
        goalTooltip: "1e108 Money (changes every update)", // Shows when achievement is not completed
    },
    22: {
        name: "Infinite",
        done() {return player.inf.points.gte(1)},
        tooltip: "You reached Infinity once",
        onComplete() {addPoints("sa",1)},
        goalTooltip: "Infinity", // Shows when achievement is not completed
    },
    23: {
        name: "mega infinite",
        done() {return player.megainf.points.gte(1)},
        tooltip: "You reached Mega Infinity once",
        onComplete() {addPoints("sa",1)},
        goalTooltip: "even more?", // Shows when achievement is not completed
    },
    24: {
        name: "not possible",
        done() {return player.omegainf.points.gte(10)},
        tooltip: "Beat Infinity. (10 Omega Infinities)",
        onComplete() {addPoints("sa",1)},
        goalTooltip: "want more infinity? (10 omegainf)", // Shows when achievement is not completed
    },
},
},)

addLayer("save", {
    resource: "save", 
    startData() { return {
        unlocked: true,
        points: new Decimal(0)
    }},
    color: "#48FFD0",
    symbol: "💾",
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Savebank")
    },
    tabFormat: {
       "Savebank": {
            content: [
                ["display-text",
                    "if you have a savefile that isn't added, dm them to coolboris08 on discord",
                    { "color": "white", "font-size": "13px",}],
                    "blank",
                ["display-text",
                 "to have the best experience, turn off offline progress when loading a file",
                    { "color": "white", "font-size": "16px",}],
                    "blank",
                "clickables",
            ],
        },
    },
  clickables: {
    11: {
        title: "Full Reset",
        display: "Chapter 0: Earth",
        canClick: true,
        onClick() {
            if(!confirm("WARNING: Your save file will be fully changed. Are you sure?")) return;
            importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTcyMDYzMTY5MjE3OCwibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJnYWxhY3RpY3RyZWUxMSIsInZlcnNpb24iOiIwLlByZTIuMCIsInRpbWVQbGF5ZWQiOjM2NjUuMDM4NTc0NzcxODU5LCJrZWVwR29pbmciOmZhbHNlLCJoYXNOYU4iOmZhbHNlLCJwb2ludHMiOiIxMCIsInN1YnRhYnMiOnsiY2hhbmdlbG9nLXRhYiI6e30sInJvIjp7Im1haW5UYWJzIjoiTWlsZXN0b25lcyJ9LCJzIjp7Im1haW5UYWJzIjoiTWFpbiJ9LCJhcyI6eyJtYWluVGFicyI6IlVwZ3JhZGVzIn0sImEiOnsibWFpblRhYnMiOiJBY2hpZXZlbWVudHMifSwiYXN0Ijp7Im1haW5UYWJzIjoiTWlsZXN0b25lcyJ9LCJjIjp7Im1haW5UYWJzIjoiTWlsZXN0b25lcyJ9fSwibGFzdFNhZmVUYWIiOiJyIiwiaW5mb2JveGVzIjp7fSwiaW5mby10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozNjY1LjAzODU3NDc3MTg1OSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJvcHRpb25zLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjM2NjUuMDM4NTc0NzcxODU5LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImNoYW5nZWxvZy10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozNjY1LjAzODU3NDc3MTg1OSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJyIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIwIiwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjM2NjUuMDM4NTc0NzcxODU5LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInJvIjp7InVubG9ja2VkIjpmYWxzZSwicG9pbnRzIjoiMCIsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozNjY1LjAzODU3NDc3MTg1OSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJzIjp7InVubG9ja2VkIjpmYWxzZSwicG9pbnRzIjoiMCIsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozNjY1LjAzODU3NDc3MTg1OSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJhIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIwIiwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjM2NjUuMDM4NTc0NzcxODU5LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImJsYW5rIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MzY2NS4wMzg1NzQ3NzE4NTksImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwidHJlZS10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozNjY1LjAzODU3NDc3MTg1OSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJhcyI6eyJ1bmxvY2tlZCI6ZmFsc2UsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MzY2NS4wMzg1NzQ3NzE4NTksImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYyI6eyJ1bmxvY2tlZCI6ZmFsc2UsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MzY2NS4wMzg1NzQ3NzE4NTksImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYXN0Ijp7InVubG9ja2VkIjpmYWxzZSwicG9pbnRzIjoiMCIsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozNjY1LjAzODU3NDc3MTg1OSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9fQ==")
        },
        style() {return{
            'background-color': "Red",
        }},
    },
    12: {
        title: "Unlock Rockets",
        display: "Chapter 0: Earth",
        canClick: true,
        onClick() {
            if(!confirm("WARNING: Your save file will be fully changed. Are you sure?")) return;
            importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTcyMDYzMjkxMTEyMCwibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJnYWxhY3RpY3RyZWUxMSIsInZlcnNpb24iOiIwLlByZTIuMCIsInRpbWVQbGF5ZWQiOjQ4OS40NTIwMDAwMDAwMTYyLCJrZWVwR29pbmciOmZhbHNlLCJoYXNOYU4iOmZhbHNlLCJwb2ludHMiOiI1MDguMTc3NDUzMTcxMDkzMTMiLCJzdWJ0YWJzIjp7ImNoYW5nZWxvZy10YWIiOnt9LCJybyI6eyJtYWluVGFicyI6Ik1pbGVzdG9uZXMifSwicyI6eyJtYWluVGFicyI6Ik1haW4ifSwiYSI6eyJtYWluVGFicyI6IkFjaGlldmVtZW50cyJ9LCJhcyI6eyJtYWluVGFicyI6IlVwZ3JhZGVzIn0sImFzdCI6eyJtYWluVGFicyI6Ik1pbGVzdG9uZXMifSwiYyI6eyJtYWluVGFicyI6Ik1pbGVzdG9uZXMifX0sImxhc3RTYWZlVGFiIjoicm8iLCJpbmZvYm94ZXMiOnt9LCJpbmZvLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjQ4OS40NTIwMDAwMDAwMTYyLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sIm9wdGlvbnMtdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NDg5LjQ1MjAwMDAwMDAxNjIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiY2hhbmdlbG9nLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjQ4OS40NTIwMDAwMDAwMTYyLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInJvIjp7InVubG9ja2VkIjpmYWxzZSwicG9pbnRzIjoiMCIsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjo0ODkuNDUyMDAwMDAwMDE2MiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJyIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiI1MDAiLCJ0b3RhbCI6IjEyODIiLCJiZXN0IjoiNTAwIiwicmVzZXRUaW1lIjo2LjM1Mjk5OTk5OTk5OTk5OCwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMTQsMTUsMjEsMjIsMjMsMjQsMjVdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwicyI6eyJ1bmxvY2tlZCI6ZmFsc2UsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NDg5LjQ1MjAwMDAwMDAxNjIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYSI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMiIsInRvdGFsIjoiMiIsImJlc3QiOiIyIiwicmVzZXRUaW1lIjo0ODkuNDUyMDAwMDAwMDE2MiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6WyIxMSIsIjEyIl0sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJhcyI6eyJ1bmxvY2tlZCI6ZmFsc2UsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NDg5LjQ1MjAwMDAwMDAxNjIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYmxhbmsiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjo0ODkuNDUyMDAwMDAwMDE2MiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJ0cmVlLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjQ4OS40NTIwMDAwMDAwMTYyLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImFzdCI6eyJ1bmxvY2tlZCI6ZmFsc2UsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NDg5LjQ1MjAwMDAwMDAxNjIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYyI6eyJ1bmxvY2tlZCI6ZmFsc2UsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NDg5LjQ1MjAwMDAwMDAxNjIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifX0=")
        },
        style() {return{
            'background-color': "#6D6D6D",
        }},
    },
    13: {
        title: "Unlock Astronauts",
        display: "Chapter 0: Earth",
        canClick: true,
        onClick() {
            if(!confirm("WARNING: Your save file will be fully changed. Are you sure?")) return;
            importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTcyMDY4OTM0OTg3NCwibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJnYWxhY3RpY3RyZWUxMSIsInZlcnNpb24iOiIwLjIuMCIsInRpbWVQbGF5ZWQiOjYzNjEuNTU1OTIyNjU1NjEyLCJrZWVwR29pbmciOmZhbHNlLCJoYXNOYU4iOmZhbHNlLCJwb2ludHMiOiIxMjAxNTY5NzAzMzQuODQwMTIiLCJzdWJ0YWJzIjp7ImNoYW5nZWxvZy10YWIiOnt9LCJybyI6eyJtYWluVGFicyI6Ik1pbGVzdG9uZXMifSwicyI6eyJtYWluVGFicyI6Ik1haW4ifSwiYSI6eyJtYWluVGFicyI6IkFjaGlldmVtZW50cyJ9LCJhcyI6eyJtYWluVGFicyI6IlVwZ3JhZGVzIn0sImFzdCI6eyJtYWluVGFicyI6Ik1pbGVzdG9uZXMifSwiYyI6eyJtYWluVGFicyI6Ik1pbGVzdG9uZXMifSwiciI6eyJtYWluVGFicyI6Ik1haW4ifSwic2EiOnsibWFpblRhYnMiOiJTZWNyZXQgQWNoaWV2ZW1lbnRzIn0sInNhdmUiOnsibWFpblRhYnMiOiJTYXZlYmFuayJ9fSwibGFzdFNhZmVUYWIiOiJyIiwiaW5mb2JveGVzIjp7fSwiaW5mby10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjo2MzYxLjU1NTkyMjY1NTYxMiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJvcHRpb25zLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjYzNjEuNTU1OTIyNjU1NjEyLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImNoYW5nZWxvZy10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjo2MzYxLjU1NTkyMjY1NTYxMiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJibGFuayI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjYzNjEuNTU1OTIyNjU1NjEyLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInRyZWUtdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NjM2MS41NTU5MjI2NTU2MTIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiciI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiNzg1MDY4Nzk1NzMyMy4zOTYiLCJ0b3RhbCI6Ijc4NTA3ODgwNDEzMDUuMzk2IiwiYmVzdCI6Ijc4NTA2ODc5NTczMjMuMzk2IiwicmVzZXRUaW1lIjo1Ny42OTM5OTk5OTk5OTk5MjQsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzExLDEyLDEzLDE0LDE1LDIxLDIyLDIzLDI0LDI1LDMxLDMyLDMzLDM0LDM1XSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sInJvIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiI4IiwidG90YWwiOiIyNCIsImJlc3QiOiI4IiwicmVzZXRUaW1lIjo2OS4xMDY5OTk5OTk5OTk3MywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTNdLCJtaWxlc3RvbmVzIjpbIjEiLCIyIiwiMyIsIjQiLCI1IiwiNiIsIjciLCI4Il0sImxhc3RNaWxlc3RvbmUiOiI4IiwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwiYSI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiOCIsInRvdGFsIjoiOCIsImJlc3QiOiI4IiwicmVzZXRUaW1lIjo2MzYxLjU1NTkyMjY1NTYxMiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6WyIxMSIsIjEyIiwiMTMiLCIxNCIsIjE2IiwiMTUiLCIyMSIsIjIyIl0sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJzYSI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMyIsInRvdGFsIjoiMyIsImJlc3QiOiIzIiwicmVzZXRUaW1lIjo1ODcyLjEwMzkyMjY1NTU4NSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6WyIxMSIsIjEyIiwiMTMiXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInNhdmUiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NTg3Mi4xMDM5MjI2NTU1ODUsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6eyIxMSI6IiIsIjEyIjoiIiwiMTMiOiIiLCIyMSI6IiIsIjIyIjoiIn0sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYXMiOnsidW5sb2NrZWQiOmZhbHNlLCJwb2ludHMiOiIwIiwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjYzNjEuNTU1OTIyNjU1NjEyLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwicyI6eyJ1bmxvY2tlZCI6ZmFsc2UsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NjM2MS41NTU5MjI2NTU2MTIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYyI6eyJ1bmxvY2tlZCI6ZmFsc2UsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NjM2MS41NTU5MjI2NTU2MTIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYXN0Ijp7InVubG9ja2VkIjpmYWxzZSwicG9pbnRzIjoiMCIsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjo2MzYxLjU1NTkyMjY1NTYxMiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9fQ==")
        },
        style() {return{
            'background-color': "#EFEFEF",
        }},
     },
     21: {
        title: "Unlock Space",
        display: "Chapter 1: Space",
        canClick: true,
        onClick() {
            if(!confirm("WARNING: Your save file will be fully changed. Are you sure?")) return;
            importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTcyMDczNDI2MzczMiwibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJnYWxhY3RpY3RyZWUxMSIsInZlcnNpb24iOiIwLjIuMCIsInRpbWVQbGF5ZWQiOjEyNjU0LjAyMTgwOTExNjYsImtlZXBHb2luZyI6ZmFsc2UsImhhc05hTiI6ZmFsc2UsInBvaW50cyI6IjYuMzc3NTMyODYxMjUwMjA4NWUzMSIsInN1YnRhYnMiOnsiY2hhbmdlbG9nLXRhYiI6e30sInJvIjp7Im1haW5UYWJzIjoiVXBncmFkZXMifSwicyI6eyJtYWluVGFicyI6Ik1haW4ifSwiYSI6eyJtYWluVGFicyI6IkFjaGlldmVtZW50cyJ9LCJhcyI6eyJtYWluVGFicyI6IlVwZ3JhZGVzIn0sImFzdCI6eyJtYWluVGFicyI6Ik1pbGVzdG9uZXMifSwiYyI6eyJtYWluVGFicyI6Ik1pbGVzdG9uZXMifSwiciI6eyJtYWluVGFicyI6Ik1haW4ifSwic2EiOnsibWFpblRhYnMiOiJTZWNyZXQgQWNoaWV2ZW1lbnRzIn0sInNhdmUiOnsibWFpblRhYnMiOiJTYXZlYmFuayJ9LCJzb2Z0Y2FwcyI6eyJtYWluVGFicyI6ImluZm8ifX0sImxhc3RTYWZlVGFiIjoicyIsImluZm9ib3hlcyI6e30sImluZm8tdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MTI2NTQuMDIxODA5MTE2NiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJvcHRpb25zLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjEyNjU0LjAyMTgwOTExNjYsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiY2hhbmdlbG9nLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjEyNjU0LjAyMTgwOTExNjYsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYmxhbmsiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxMjY1NC4wMjE4MDkxMTY2LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInRyZWUtdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MTI2NTQuMDIxODA5MTE2NiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJhc3QiOnsidW5sb2NrZWQiOmZhbHNlLCJwb2ludHMiOiIwIiwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjEyNjU0LjAyMTgwOTExNjYsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiciI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiOS4yNTcwNjAxMzkwMTY5OTNlMzEiLCJ0b3RhbCI6IjkuMjU3MDYwMTM5MDE2OTkzZTMxIiwiYmVzdCI6IjkuMjU3MDYwMTM5MDE2OTkzZTMxIiwicmVzZXRUaW1lIjoxMC4xNTkwMDAwMDAwMDAwMDgsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzExLDEyLDEzLDE0LDE1LDIxLDIyLDIzLDI0LDI1LDMxLDMyLDMzLDM0LDM1XSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sInJvIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIxNSIsInRvdGFsIjoiNTMiLCJiZXN0IjoiMTUiLCJyZXNldFRpbWUiOjEwLjE1OTAwMDAwMDAwMDAwOCwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMTQsMTVdLCJtaWxlc3RvbmVzIjpbIjEiLCIyIiwiMyIsIjQiLCI1IiwiNiIsIjciLCI4IiwiOSIsIjEwIiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIxNSJdLCJsYXN0TWlsZXN0b25lIjoiMTUiLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJhY3RpdmVDaGFsbGVuZ2UiOm51bGx9LCJhIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIxMSIsInRvdGFsIjoiMTEiLCJiZXN0IjoiMTEiLCJyZXNldFRpbWUiOjEyNjU0LjAyMTgwOTExNjYsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOlsiMTEiLCIxMiIsIjEzIiwiMTQiLCIxNiIsIjE1IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIyNSJdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwic2EiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjMiLCJ0b3RhbCI6IjMiLCJiZXN0IjoiMyIsInJlc2V0VGltZSI6MTIxNjQuNTY5ODA5MTE2NTcyLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbIjExIiwiMTIiLCIxMyJdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwic2F2ZSI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMCIsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxMjE2NC41Njk4MDkxMTY1NzIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6eyIxMSI6IiIsIjEyIjoiIiwiMTMiOiIiLCIyMSI6IiIsIjIyIjoiIn0sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwic29mdGNhcHMiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6NjI5Mi40NjU4ODY0NTk5MTgsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYXMiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjMwODc5MDEyNTA5MzczNy44IiwidG90YWwiOiIzMDg4MDAyMzMzNTUzMjEuOCIsImJlc3QiOiIzMDg3OTAxMjUwOTM3MzcuOCIsInJlc2V0VGltZSI6NzIuMDU4OTk5OTk5OTk5ODYsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzExLDEyLDEzLDE0LDE1LDIxLDIyLDIzLDI0LDI1XSwibWlsZXN0b25lcyI6WyIxIiwiMiIsIjMiXSwibGFzdE1pbGVzdG9uZSI6IjMiLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJhY3RpdmVDaGFsbGVuZ2UiOm51bGx9LCJzIjp7InVubG9ja2VkIjpmYWxzZSwicG9pbnRzIjoiMCIsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxMjY1NC4wMjE4MDkxMTY2LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImMiOnsidW5sb2NrZWQiOmZhbHNlLCJwb2ludHMiOiIwIiwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjEyNjU0LjAyMTgwOTExNjYsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifX0=")
        },
        style() {return{
            'background-color':"#AC00AC",
        }},

     },
     22: {
        title: "Unlock Comets & Asteroids",
        display: "Chapter 1: Space",
        canClick: true,
        onClick() {
            if(!confirm("WARNING: Your save file will be fully changed. Are you sure?")) return;
            importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTcyMDk2Nzk3Mzg0Nywibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJnYWxhY3RpY3RyZWUxMSIsInZlcnNpb24iOiIwLjIuMCIsInRpbWVQbGF5ZWQiOjIwNDY5Ljg5MTYzNzA4MDQwNywia2VlcEdvaW5nIjpmYWxzZSwiaGFzTmFOIjpmYWxzZSwicG9pbnRzIjoiNi4xNzg5MTk5MTYwMjA1MTFlNDgiLCJzdWJ0YWJzIjp7ImNoYW5nZWxvZy10YWIiOnt9LCJybyI6eyJtYWluVGFicyI6IlVwZ3JhZGVzIn0sInMiOnsibWFpblRhYnMiOiJNaWxlc3RvbmVzIn0sImEiOnsibWFpblRhYnMiOiJBY2hpZXZlbWVudHMifSwiYXMiOnsibWFpblRhYnMiOiJVcGdyYWRlcyJ9LCJhc3QiOnsibWFpblRhYnMiOiJNaWxlc3RvbmVzIn0sImMiOnsibWFpblRhYnMiOiJNaWxlc3RvbmVzIn0sInIiOnsibWFpblRhYnMiOiJNYWluIn0sInNhIjp7Im1haW5UYWJzIjoiU2VjcmV0IEFjaGlldmVtZW50cyJ9LCJzYXZlIjp7Im1haW5UYWJzIjoiU2F2ZWJhbmsifSwic29mdGNhcHMiOnsibWFpblRhYnMiOiJpbmZvIn19LCJsYXN0U2FmZVRhYiI6ImMiLCJpbmZvYm94ZXMiOnt9LCJpbmZvLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjIwNDY5Ljg5MTYzNzA4MDQwNywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJvcHRpb25zLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjIwNDY5Ljg5MTYzNzA4MDQwNywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJjaGFuZ2Vsb2ctdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MjA0NjkuODkxNjM3MDgwNDA3LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImJsYW5rIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MjA0NjkuODkxNjM3MDgwNDA3LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInRyZWUtdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MjA0NjkuODkxNjM3MDgwNDA3LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImFzdCI6eyJ1bmxvY2tlZCI6ZmFsc2UsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MjA0NjkuODkxNjM3MDgwNDA3LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInIiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjEuMDI2MTI2OTUzMzkxMTUxNWU2MCIsInRvdGFsIjoiMS4wMjYxMjY5NTMzOTExNTE1ZTYwIiwiYmVzdCI6IjEuMDI2MTI2OTUzMzkxMTUxNWU2MCIsInJlc2V0VGltZSI6MTYuMjUxMDAwMDAwMDAwMDMzLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsxMSwxMiwxMywxNCwxNSwyMSwyMiwyMywyNCwyNSwzMSwzMiwzMywzNCwzNSw0MSw0Miw0Myw0NCw0NV0sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJhY3RpdmVDaGFsbGVuZ2UiOm51bGx9LCJybyI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMjAiLCJ0b3RhbCI6IjczIiwiYmVzdCI6IjIwIiwicmVzZXRUaW1lIjoxNi4yNTEwMDAwMDAwMDAwMzMsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzExLDEyLDEzLDE0LDE1LDIxXSwibWlsZXN0b25lcyI6WyIxIiwiMiIsIjMiLCI0IiwiNSIsIjYiLCI3IiwiOCIsIjkiLCIxMCIsIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIxNiIsIjE3IiwiMTgiLCIxOSIsIjIwIl0sImxhc3RNaWxlc3RvbmUiOiIyMCIsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sImEiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjE3IiwidG90YWwiOiIxNyIsImJlc3QiOiIxNyIsInJlc2V0VGltZSI6MjA0NjkuODkxNjM3MDgwNDA3LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbIjExIiwiMTIiLCIxMyIsIjE0IiwiMTYiLCIxNSIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMjUiLCIyNiIsIjMxIiwiMzIiLCIzMyIsIjM0IiwiMzUiXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInNhIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIzIiwidG90YWwiOiIzIiwiYmVzdCI6IjMiLCJyZXNldFRpbWUiOjE5OTgwLjQzOTYzNzA4MiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6WyIxMSIsIjEyIiwiMTMiXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInNhdmUiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MTk5ODAuNDM5NjM3MDgyLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnsiMTEiOiIiLCIxMiI6IiIsIjEzIjoiIiwiMjEiOiIiLCIyMiI6IiIsIjIzIjoiIn0sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwic29mdGNhcHMiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MTQxMDguMzM1NzE0NDI3NDg1LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImFzIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIxLjUyNDA2NjYyOTgwNjIyMzVlMjkiLCJ0b3RhbCI6IjEuNTI0MDY2NjI5ODA2MjIzNWUyOSIsImJlc3QiOiIxLjUyNDA2NjYyOTgwNjIyMzVlMjkiLCJyZXNldFRpbWUiOjEwOC45MDYwMDAwMDAwMDAwOSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMTQsMTUsMjEsMjIsMjMsMjQsMjVdLCJtaWxlc3RvbmVzIjpbIjEiLCIyIiwiMyIsIjQiXSwibGFzdE1pbGVzdG9uZSI6IjQiLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJhY3RpdmVDaGFsbGVuZ2UiOm51bGx9LCJzIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiI0NjQ4LjcwMTc1MDU4NDE3IiwidG90YWwiOiIxMzc5OC43MDE3NTA1ODQwMDUiLCJiZXN0IjoiMTEzMTEuNDU3NzUwNTg0MjIzIiwicmVzZXRUaW1lIjo0Mjc5LjYyOTY0MTA0MDUxNywiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTIsMTMsMTQsMjIsMjMsMjQsMzJdLCJtaWxlc3RvbmVzIjpbIjEiLCIyIiwiMyIsIjQiXSwibGFzdE1pbGVzdG9uZSI6IjQiLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJhY3RpdmVDaGFsbGVuZ2UiOm51bGx9LCJjIjp7InVubG9ja2VkIjpmYWxzZSwicG9pbnRzIjoiMCIsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoyMDQ2OS44OTE2MzcwODA0MDcsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifX0=")
        },
        style() {return{
            'background-color':"#43A05F",
        }},
     },
     23: {
        title: "Endgame",
        display: "Chapter 1: Space",
        canClick: true,
        onClick() {
            if(!confirm("WARNING: Your save file will be fully changed. Are you sure?")) return;
            importSave("eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTcyMTc2NDY5NzgzOCwibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJnYWxhY3RpY3RyZWUxMSIsInZlcnNpb24iOiIwLjIuMiIsInRpbWVQbGF5ZWQiOjMyMTI5Ljg5OTYzNzAyNTk3NCwia2VlcEdvaW5nIjp0cnVlLCJoYXNOYU4iOmZhbHNlLCJwb2ludHMiOiI3LjQ1MTAyOTExMjczNTM2N2UxMDgiLCJzdWJ0YWJzIjp7ImNoYW5nZWxvZy10YWIiOnt9LCJybyI6eyJtYWluVGFicyI6Ik1pbGVzdG9uZXMifSwicyI6eyJtYWluVGFicyI6Ik1pbGVzdG9uZXMifSwiYSI6eyJtYWluVGFicyI6IkFjaGlldmVtZW50cyJ9LCJhcyI6eyJtYWluVGFicyI6IlVwZ3JhZGVzIn0sImFzdCI6eyJtYWluVGFicyI6IkFzdGVyb2lkcyJ9LCJjIjp7Im1haW5UYWJzIjoiVXBncmFkZXMifSwiciI6eyJtYWluVGFicyI6Ik1haW4ifSwic2EiOnsibWFpblRhYnMiOiJTZWNyZXQgQWNoaWV2ZW1lbnRzIn0sInNhdmUiOnsibWFpblRhYnMiOiJTYXZlYmFuayJ9LCJzb2Z0Y2FwcyI6eyJtYWluVGFicyI6IkFzdHJvbmF1dHMifSwiaW5mIjp7Im1haW5UYWJzIjoiSW5maW5pdHkifSwibWVnYWluZiI6eyJtYWluVGFicyI6Ik1lZ2EgSW5maW5pdHkifSwib21lZ2FpbmYiOnsibWFpblRhYnMiOiJPbWVnYSBJbmZpbml0eSJ9fSwibGFzdFNhZmVUYWIiOiJpbmYiLCJpbmZvYm94ZXMiOnt9LCJpbmZvLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjMyMTI5Ljg5OTYzNzAyNTk3NCwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJvcHRpb25zLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjMyMTI5Ljg5OTYzNzAyNTk3NCwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJjaGFuZ2Vsb2ctdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MzIxMjkuODk5NjM3MDI1OTc0LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sImJsYW5rIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MzIxMjkuODk5NjM3MDI1OTc0LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInRyZWUtdGFiIjp7InVubG9ja2VkIjp0cnVlLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MzIxMjkuODk5NjM3MDI1OTc0LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInIiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjIuMjcyNzQ4NDYzNzQ1OTE3ZTExNSIsInRvdGFsIjoiMi4yNzI3NDg0NjM3NDU5MTdlMTE1IiwiYmVzdCI6IjIuMjcyNzQ4NDYzNzQ1OTE3ZTExNSIsInJlc2V0VGltZSI6MzIyLjA0ODAwMDAwMDAwMTQsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzExLDEyLDEzLDE0LDE1LDIxLDIyLDIzLDI0LDI1LDMxLDMyLDMzLDM0LDM1LDQxLDQyLDQzLDQ0LDQ1XSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiIsImFjdGl2ZUNoYWxsZW5nZSI6bnVsbH0sImEiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjI2IiwidG90YWwiOiIyNiIsImJlc3QiOiIyNiIsInJlc2V0VGltZSI6MzIxMjkuODk5NjM3MDI1OTc0LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbIjExIiwiMTIiLCIxMyIsIjE0IiwiMTYiLCIxNSIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMjUiLCIyNiIsIjMxIiwiMzIiLCIzMyIsIjM0IiwiMzUiLCI0MiIsIjQxIiwiMzYiLCI0MyIsIjQ0IiwiNDUiLCI0NiIsIjUxIiwiNTIiXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInNhIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiI2IiwidG90YWwiOiI2IiwiYmVzdCI6IjYiLCJyZXNldFRpbWUiOjMxNjQwLjQ0NzYzNzAyNzU2NiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6WyIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMjEiXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sInNhdmUiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MzE2NDAuNDQ3NjM3MDI3NTY2LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnsiMTEiOiIiLCIxMiI6IiIsIjEzIjoiIiwiMjEiOiIiLCIyMiI6IiIsIjIzIjoiIn0sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwic29mdGNhcHMiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjAiLCJ0b3RhbCI6IjAiLCJiZXN0IjoiMCIsInJlc2V0VGltZSI6MjU3NjguMzQzNzE0MzczMDUsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiYXMiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjYuNjUyMjY1MDcxNjIyMjllNjIiLCJ0b3RhbCI6IjYuNjUyMjY1MDcxNjIyMjllNjIiLCJiZXN0IjoiNi42NTIyNjUwNzE2MjIyOWU2MiIsInJlc2V0VGltZSI6NDE3LjEzMzAwMDAwMDAwNDI0LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsxMSwxMiwxMywxNCwxNSwyMSwyMiwyMywyNCwyNV0sIm1pbGVzdG9uZXMiOlsiMSIsIjIiLCIzIiwiNCJdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJhY3RpdmVDaGFsbGVuZ2UiOm51bGx9LCJybyI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMjkiLCJ0b3RhbCI6IjI5IiwiYmVzdCI6IjI5IiwicmVzZXRUaW1lIjozMjIuMDQ4MDAwMDAwMDAxNCwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMTQsMTUsMjFdLCJtaWxlc3RvbmVzIjpbIjEiLCIyIiwiMyIsIjQiLCI1IiwiNiIsIjciLCI4IiwiOSIsIjEwIiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIxNSIsIjE2IiwiMTciLCIxOCIsIjE5IiwiMjAiXSwibGFzdE1pbGVzdG9uZSI6IjIwIiwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwicyI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMTA1MjYwNDUwMy43MDE3NTA1IiwidG90YWwiOiIyMjA1NzI4NjUzLjcwMTc1MDgiLCJiZXN0IjoiMTM0MTI3NDUwMy43MDE3NTA1IiwicmVzZXRUaW1lIjoxNTkzOS42Mzc2NDEwNDY0NjUsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WzEyLDEzLDE0LDIyLDIzLDI0LDMyLDMzLDM0LDQzLDQyLDQ0LDExLDIxLDMxLDE1LDI1LDM1LDQ1LDQxLDUxXSwibWlsZXN0b25lcyI6WyIxIiwiMiIsIjMiLCI0IiwiNSIsIjYiLCI3IiwiOCIsIjkiXSwibGFzdE1pbGVzdG9uZSI6IjkiLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJhY3RpdmVDaGFsbGVuZ2UiOm51bGx9LCJjIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiI0MTg2MjAyMjIzLjQ4NDI2OSIsInRvdGFsIjoiODQwMTIwMjM5Mi40ODQyNjQiLCJiZXN0IjoiNDE4NjIwMjIyMy40ODQyNjkiLCJyZXNldFRpbWUiOjQxNy4xMzMwMDAwMDAwMDQyNCwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTIsMTMsMTQsMTUsMjEsMjIsMjMsMjQsMjVdLCJtaWxlc3RvbmVzIjpbIjEiLCIyIiwiMyIsIjQiLCI1Il0sImxhc3RNaWxlc3RvbmUiOiI1IiwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6eyIxMSI6MSwiMTIiOjEsIjEzIjoxLCIxNCI6MX0sImdyaWQiOnt9LCJwcmV2VGFiIjoiIiwiYWN0aXZlQ2hhbGxlbmdlIjpudWxsfSwiYXN0Ijp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIxMDQzNjYwMDQ3MTQ5MTMyLjgiLCJ0b3RhbCI6IjExOTM2NjAxMjIxNDkzNTkuOCIsImJlc3QiOiIxMDQzNjYwMDQ3MTQ5MTMyLjgiLCJyZXNldFRpbWUiOjc4Ny4yNTEwMDAwMDAwMTE1LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsxMSwxMiwxMywxNCwxNSwyMSwyMiwyMywyNCwyNV0sIm1pbGVzdG9uZXMiOlsiMSIsIjIiLCIzIiwiNCIsIjUiXSwibGFzdE1pbGVzdG9uZSI6IjUiLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7IjExIjoxLCIxMiI6MSwiMTMiOjEsIjE0IjoxfSwiZ3JpZCI6e30sInByZXZUYWIiOiIiLCJhY3RpdmVDaGFsbGVuZ2UiOm51bGx9LCJpbmYiOnsidW5sb2NrZWQiOmZhbHNlLCJwb2ludHMiOiIwIiwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjMwNTYuNzU5OTk5OTk5OTg0LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sIm1lZ2FpbmYiOnsidW5sb2NrZWQiOmZhbHNlLCJwb2ludHMiOiIwIiwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjMwNTYuNzU5OTk5OTk5OTg0LCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOltdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sIm9tZWdhaW5mIjp7InVubG9ja2VkIjpmYWxzZSwicG9pbnRzIjoiMCIsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjozMDU2Ljc1OTk5OTk5OTk4NCwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9fQ==")
        },
        style() {return{
            'background-color':"MidnightBlue",
        }},
     },

},
},)

addLayer("softcaps", {
    resource: "softcaps", 
    startData() { return {
        unlocked: true,
        points: new Decimal(0)
    }},
    color: "#052880",
    symbol: "⬇️",
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Softcaps")
    },
    tabFormat: {
        "Softcaps?": {
            content: [
                ["display-text",
                "Softcaps are nerfs that are required for balancing.",
                { "color": "white", "font-size": "20px",}],
                "blank",
                    ["display-text",
                        "You will unlock softcaps at some features",
                        { "color": "white", "font-size": "20px",}],
                        "blank",
                        "blank",
                        "blank",
                        ["display-text",
                            "I HATE SOFTCAPS",
                            { "color": "gray", "font-size": "10px",}],
                            "blank",
                ],
        },
        "Rocket Fuel": {
            content: [
                ["display-text",
                "Softcap at 1e60 Rocket Fuel (^0.88)",
                { "color": "white", "font-size": "16px",}],
                "blank",
            ]
        },
       "Astronauts": {
                content: [
                    ["display-text",
                    "Softcap at 10,000 Astronauts (^0.88)",
                    { "color": "white", "font-size": "16px",}],
                    "blank",
                    ["display-text",
                    "Softcap at 1e10 Astronauts (^0.82)",
                    { "color": "white", "font-size": "16px",}],
                    "blank",
                    ["display-text",
                        "Softcap at 1e12 Astronauts (^0.7)",
                        { "color": "white", "font-size": "16px",}],
                        "blank",
                    ["display-text",
                        "Softcap at 1e15 Astronauts (^0.65)",
                        { "color": "white", "font-size": "16px",}],
                        "blank",
                        ["display-text",
                            "Softcap at 1e20 Astronauts (^0.1)",
                            { "color": "white", "font-size": "16px",}],
                            "blank",
                            ["display-text",
                                "Softcap at 1e30 Astronauts (^0.0001)",
                                { "color": "white", "font-size": "16px",}],
                                "blank",
                                ["display-text",
                                    "Softcap at 1e35 Astronauts (^0.01)",
                                    { "color": "white", "font-size": "16px",}],
                                    "blank",
                  ],
                  unlocked() {return player.as.points.gte(1) || player.as.unlocked} 
                },
                "Comets": {
                    content: [
                        ["display-text",
                            "Softcap at 100,000 Comets (^0.92)",
                            { "color": "white", "font-size": "16px",}],
                            "blank",
                                ["display-text",
                                    "Softcap at 1,000,000 Comets (^0.7)",
                                    { "color": "white", "font-size": "16px",}],
                                    "blank",
                                    ["display-text",
                                        "Softcap at 1e10 Comets (^0.000001) [Will change next update, preventing mass asteroid gain",
                                        { "color": "white", "font-size": "16px",}],
                                        "blank",
                                    
                      ],
                      unlocked() {return player.c.points.gte(1) || player.c.unlocked} 
                    },
                    "Asteroids": {
                        content: [
                            ["display-text",
                                "Softcap at 100,000 Asteroids (^0.92)",
                                { "color": "white", "font-size": "16px",}],
                                "blank",
                                ["display-text",
                                    "Softcap at 5,000,000 Asteroids (^0.5)",
                                    { "color": "white", "font-size": "16px",}],
                                    "blank",
                                    ["display-text",
                                        "Softcap at 1e9 Asteroids (^0.9)",
                                        { "color": "white", "font-size": "16px",}],
                                        "blank",
                                        ["display-text",
                                            "Softcap at 1e15 Asteroids (^0.000001) [Will change next update, preventing mass asteroid gain",
                                            { "color": "white", "font-size": "16px",}],
                                            "blank",
                  ],
                          unlocked() {return player.ast.points.gte(1) || player.ast.unlocked} 
                        },
            }
},)
