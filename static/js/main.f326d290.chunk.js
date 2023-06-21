(this["webpackJsonpreact-ipl"] = this["webpackJsonpreact-ipl"] || []).push([
    [0], {
        10: function(a, e, t) {
            a.exports = {
                PlayerCard: "PlayerCard_PlayerCard__3V5lN",
                PlayerImageWrapper: "PlayerCard_PlayerImageWrapper__IxBc_",
                PlayerImage: "PlayerCard_PlayerImage__2NQPh",
                PlayerDataWrapper: "PlayerCard_PlayerDataWrapper__1pwlj",
                PlayerName: "PlayerCard_PlayerName__V5GIx",
                PlayerStatsWrapper: "PlayerCard_PlayerStatsWrapper__38xmh",
                StatValue: "PlayerCard_StatValue__1qB-f",
                StatLabel: "PlayerCard_StatLabel__3EO5Y"
            }
        },
        16: function(a, e, t) {
            a.exports = {
                Topbar: "Topbar_Topbar__PvX8m",
                Logo: "Topbar_Logo__3Ngck",
                RightMenu: "Topbar_RightMenu__2qdqF",
                SearchBoxWrapper: "Topbar_SearchBoxWrapper__3yzyW",
                SearchBox: "Topbar_SearchBox__1lyWN",
                ButtonWrapper: "Topbar_ButtonWrapper__11LQq"
            }
        },
        18: function(a, e, t) {
            a.exports = {
                LoginForm: "LoginPage_LoginForm__3Amb5",
                Heading: "LoginPage_Heading__19ol_",
                InputField: "LoginPage_InputField__21cm8"
            }
        },
        20: function(a, e, t) {
            a.exports = {
                Button: "Button_Button__1hxBU"
            }
        },
        21: function(a, e, t) {
            a.exports = {
                MainContainer: "SearchPage_MainContainer__1wBj9",
                SearchResultGrid: "SearchPage_SearchResultGrid__2D5Ka",
                NoResults: "SearchPage_NoResults__14Fka"
            }
        },
        25: function(a, e, t) {
            a.exports = {
                TeamCard: "TeamCard_TeamCard__2rJEM",
                TeamLogo: "TeamCard_TeamLogo__1CAq0"
            }
        },
        26: function(a, e, t) {
            a.exports = {
                TeamGrid: "Homepage_TeamGrid__1HklO"
            }
        },
        3: function(a, e, t) {
            a.exports = {
                CreationForm: "CreateTeamPage_CreationForm__RQTRw",
                Heading: "CreateTeamPage_Heading__QC1tN",
                Label: "CreateTeamPage_Label__2iJCK",
                InputField: "CreateTeamPage_InputField__2KT8x",
                ThemePickerWrapper: "CreateTeamPage_ThemePickerWrapper__1Tcuf",
                ButtonWrapper: "CreateTeamPage_ButtonWrapper__1Bz0Z",
                Error: "CreateTeamPage_Error__1asrA"
            }
        },
        30: function(a, e, t) {
            a.exports = {
                App: "App_App__2vNQi"
            }
        },
        36: function(a, e, t) {},
        46: function(a, e, t) {
            "use strict";
            t.r(e);
            var r = t(1),
                l = t.n(r),
                s = t(27),
                n = t.n(s),
                i = (t(36), t(31)),
                o = t(6),
                p = t(11),
                c = t(12),
                m = t(14),
                h = t(13),
                d = t(17),
                u = t(2),
                y = t(16),
                g = t.n(y),
                b = t.p + "static/media/ipl.02656317.png",
                C = {
                    CSK: "csk",
                    KKR: "kkr",
                    RR: "rr",
                    SRH: "srh",
                    RCB: "rcb",
                    KXP: "kxp",
                    MI: "mi",
                    DC: "dc"
                };
            Object.freeze(C);
            var j = {
                BATSMAN: "batsman",
                BOWLER: "bowler",
                ALL_ROUNDER: "all-rounder",
                WICKET_KEEPER: "wicket_keeper"
            };
            Object.freeze(j);
            Object.freeze({
                LOGIN: "login",
                LOGOUT: "logout",
                CREATE_TEAM: "create-team",
                CREATE_PLAYER: "create-player"
            });
            var O = {
                TEAM_DATA: "team-data",
                PLAYER_DATA: "player-data",
                LOGIN_STATUS: "login-status"
            };
            Object.freeze(O);
            var I = t(20),
                R = t.n(I),
                _ = t(0),
                S = function(a) {
                    return Object(_.jsx)("button", {
                        className: [R.a.Button, "btn-secondary" === a.type ? R.a.SecondaryButton : R.a.PrimaryButton].join(" "),
                        onClick: a.onClick,
                        children: a.label
                    })
                },
                T = {
                    HOME_PAGE: "/",
                    SEARCH_PAGE: "/search",
                    TEAM_DETAILS: "/team-details",
                    LOGIN_PAGE: "/login",
                    CREATE_TEAM_PAGE: "/create/team",
                    CREATE_PLAYER_PAGE: "/create/player"
                };
            Object.freeze(T);
            var N = Object(u.f)((function(a) {
                    var e = a.history,
                        t = l.a.useRef(),
                        r = function() {
                            var a = t.current.value;
                            t.current.value = "", e.push(T.SEARCH_PAGE + "?q=" + a)
                        };
                    return Object(_.jsxs)("header", {
                        className: g.a.Topbar,
                        children: [Object(_.jsx)(d.b, {
                            to: T.HOME_PAGE,
                            children: Object(_.jsx)("img", {
                                className: g.a.Logo,
                                src: b
                            })
                        }), Object(_.jsxs)("div", {
                            className: g.a.RightMenu,
                            children: [Object(_.jsx)("form", {
                                onSubmit: function(a) {
                                    a.preventDefault(), r()
                                },
                                children: Object(_.jsxs)("div", {
                                    className: g.a.SearchBoxWrapper,
                                    children: [Object(_.jsx)("input", {
                                        ref: t,
                                        className: g.a.SearchBox,
                                        type: "text",
                                        placeholder: "Search Players",
                                        required: !0
                                    }), Object(_.jsx)("i", {
                                        className: "fas fa-search",
                                        onClick: r
                                    })]
                                })
                            }), a.isUserLoggedIn ? Object(_.jsxs)("div", {
                                className: g.a.ButtonWrapper,
                                children: [Object(_.jsx)(S, {
                                    label: "Create Team",
                                    onClick: function() {
                                        e.push(T.CREATE_TEAM_PAGE)
                                    }
                                }), Object(_.jsx)(S, {
                                    label: "Logout",
                                    onClick: function() {
                                        a.onUserLogout(), e.push(T.HOME_PAGE)
                                    }
                                })]
                            }) : Object(_.jsx)(S, {
                                label: "Login",
                                onClick: function() {
                                    e.push(T.LOGIN_PAGE)
                                }
                            })]
                        })]
                    })
                })),
                L = t(25),
                f = t.n(L),
                E = function(a) {
                    return Object(_.jsx)(d.b, {
                        className: f.a.TeamCard,
                        to: T.TEAM_DETAILS + "/" + a.teamCode,
                        style: {
                            backgroundImage: "linear-gradient(45deg, ".concat(a.themeStartColor, ", ").concat(a.themeEndColor, ")")
                        },
                        children: Object(_.jsx)("img", {
                            className: f.a.TeamLogo,
                            src: a.teamLogo
                        })
                    })
                },
                P = t.p + "static/media/csk.ccfd44d6.png",
                D = t.p + "static/media/kkr.1b584773.png",
                x = t.p + "static/media/rr.3078246d.png",
                A = t.p + "static/media/srh.deabb809.png",
                M = t.p + "static/media/rcb.52a7d9ab.png",
                v = t.p + "static/media/kxp.bcaa916c.png",
                B = t.p + "static/media/mi.7134fbda.png",
                W = t.p + "static/media/dc.451d6286.png",
                k = t.p + "static/media/Eoin-Morgan.ce08ed0c.png",
                K = t.p + "static/media/Sunil-Narine.23633ab1.png",
                H = t.p + "static/media/Shivam-Mavi.9c3cf3a5.png",
                F = t.p + "static/media/Andre-Russell.2068dce5.png",
                w = t.p + "static/media/Dinesh-Karthik.fde9080f.png",
                G = {
                    csk: {
                        teamCode: C.CSK,
                        name: "Chennai Super Kings",
                        teamLogo: P,
                        themeStartColor: "#F0D513",
                        themeEndColor: "#DFA925",
                        teamCoach: "Stephen Fleming",
                        teamCaptain: "MS Dhoni",
                        championships: [2010, 2011, 2018, 2021]
                    },
                    kkr: {
                        teamCode: C.KKR,
                        name: "Kolkata Knight Riders",
                        teamLogo: D,
                        themeStartColor: "#6F45AC",
                        themeEndColor: "#301857",
                        teamCoach: "Brendon McCullum",
                        teamCaptain: "Eoin Morgan",
                        championships: [2012, 2014]
                    },
                    rr: {
                        teamCode: C.RR,
                        name: "Rajasthan Royals",
                        teamLogo: x,
                        themeStartColor: "#315DC9",
                        themeEndColor: "#163B97",
                        teamCoach: "Andrew McDonald",
                        teamCaptain: "Sanju Samson",
                        championships: [2008]
                    },
                    srh: {
                        teamCode: C.SRH,
                        name: "Sunrisers Hyderabad",
                        teamLogo: A,
                        themeStartColor: "#EFBC44",
                        themeEndColor: "#F37107",
                        teamCoach: "Trevor Bayliss",
                        teamCaptain: "Kane Williamson",
                        championships: [2016]
                    },
                    rcb: {
                        teamCode: C.RCB,
                        name: "Royal Challengers Bangalore",
                        teamLogo: M,
                        themeStartColor: "#E5BF65",
                        themeEndColor: "#B98208",
                        teamCoach: "Simon Katich",
                        teamCaptain: "Virat Kohli",
                        championships: []
                    },
                    kxp: {
                        teamCode: C.KXP,
                        name: "Kings Eleven Punjab",
                        teamLogo: v,
                        themeStartColor: "#B31619",
                        themeEndColor: "#F64749",
                        teamCoach: "Anil Kumble",
                        teamCaptain: "KL Rahul",
                        championships: []
                    },
                    mi: {
                        teamCode: C.MI,
                        name: "Mumbai Indians",
                        teamLogo: B,
                        themeStartColor: "#10D6D5",
                        themeEndColor: "#0764AB",
                        teamCoach: "Mahela Jayawardene",
                        teamCaptain: "Rohit Sharma",
                        championships: [2013, 2015, 2017, 2019, 2020]
                    },
                    dc: {
                        teamCode: C.DC,
                        name: "Delhi Capitals",
                        teamLogo: W,
                        themeStartColor: "#DCB52F",
                        themeEndColor: "#B9241A",
                        teamCoach: "Ricky Ponting",
                        teamCaptain: "Rishabh Pant",
                        championships: []
                    }
                };
            Object.freeze(G);
            var U = [{
                playerId: 1636758291593,
                playerName: "Eoin Morgan",
                playerTeam: C.KKR,
                playerImage: k,
                playerRole: j.BATSMAN,
                isCaptain: !0,
                nationality: "English",
                totalMatches: 17,
                totalRuns: 133,
                totalWickets: 0,
                dateOfBirth: "10 September 1986",
                iplDebut: 2010
            }, {
                playerId: 1636758300998,
                playerName: "Sunil Narine",
                playerTeam: C.KKR,
                playerImage: K,
                playerRole: j.BOWLER,
                isCaptain: !1,
                nationality: "West Indian",
                totalMatches: 14,
                totalRuns: 62,
                totalWickets: 16,
                dateOfBirth: "26 May 1988",
                iplDebut: 2012
            }, {
                playerId: 1636758481826,
                playerName: "Shivam Mavi",
                playerTeam: C.KKR,
                playerImage: H,
                playerRole: j.ALL_ROUNDER,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 9,
                totalRuns: 25,
                totalWickets: 11,
                dateOfBirth: "26 November 1998",
                iplDebut: 2018
            }, {
                playerId: 1636758731017,
                playerName: "Andre Russell",
                playerTeam: C.KKR,
                playerImage: F,
                playerRole: j.ALL_ROUNDER,
                isCaptain: !1,
                nationality: "West Indian",
                totalMatches: 10,
                totalRuns: 183,
                totalWickets: 11,
                dateOfBirth: "29 April 1988",
                iplDebut: 2012
            }, {
                playerId: 1636758742859,
                playerName: "Dinesh Karthik",
                playerTeam: C.KKR,
                playerImage: w,
                playerRole: j.WICKET_KEEPER,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 17,
                totalRuns: 223,
                totalWickets: 0,
                dateOfBirth: "01 June 1985",
                iplDebut: 2008
            }, {
                playerId: 1636815441704,
                playerName: "Mayank Agarwal",
                playerTeam: C.KXP,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/158.png",
                playerRole: j.BATSMAN,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 12,
                totalRuns: 441,
                totalWickets: 0,
                dateOfBirth: "18 February 1991",
                iplDebut: 2011
            }, {
                playerId: 1636815824419,
                playerName: "Nicholas Pooran",
                playerTeam: C.KXP,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1703.png",
                playerRole: j.WICKET_KEEPER,
                isCaptain: !1,
                nationality: "West Indian",
                totalMatches: 12,
                totalRuns: 85,
                totalWickets: 0,
                dateOfBirth: "02 October 1995",
                iplDebut: 2019
            }, {
                playerId: 1636816230746,
                playerName: "Arshdeep Singh",
                playerTeam: C.KXP,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/4698.png",
                playerRole: j.BOWLER,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 12,
                totalRuns: 2,
                totalWickets: 18,
                dateOfBirth: "05 February 1999",
                iplDebut: 2019
            }, {
                playerId: 1636816758690,
                playerName: "Mohammad Shami",
                playerTeam: C.KXP,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/94.png",
                playerRole: j.BOWLER,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 14,
                totalRuns: 13,
                totalWickets: 19,
                dateOfBirth: "03 September 1990",
                iplDebut: 2009
            }, {
                playerId: 1636817231184,
                playerName: "Kane Williamson",
                playerTeam: C.SRH,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/440.png",
                playerRole: j.BATSMAN,
                isCaptain: !0,
                nationality: "New Zealander",
                totalMatches: 10,
                totalRuns: 266,
                totalWickets: 0,
                dateOfBirth: "08 August 1990",
                iplDebut: 2015
            }, {
                playerId: 1636817716887,
                playerName: "Jonny Bairstow",
                playerTeam: C.SRH,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/506.png",
                playerRole: j.WICKET_KEEPER,
                isCaptain: !1,
                nationality: "English",
                totalMatches: 7,
                totalRuns: 248,
                totalWickets: 0,
                dateOfBirth: "26 September 1989",
                iplDebut: 2019
            }, {
                playerId: 1636817955360,
                playerName: "Bhuvneshwar Kumar",
                playerTeam: C.SRH,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/116.png",
                playerRole: j.BOWLER,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 11,
                totalRuns: 34,
                totalWickets: 6,
                dateOfBirth: "05 February 1990",
                iplDebut: 2011
            }, {
                playerId: 1636818119542,
                playerName: "Jason Holder",
                playerTeam: C.SRH,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1075.png",
                playerRole: j.ALL_ROUNDER,
                isCaptain: !1,
                nationality: "West Indian",
                totalMatches: 8,
                totalRuns: 85,
                totalWickets: 16,
                dateOfBirth: "05 November 1991",
                iplDebut: 2013
            }, {
                playerId: 1636818284102,
                playerName: "Rashid Khan",
                playerTeam: C.SRH,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2885.png",
                playerRole: j.BOWLER,
                isCaptain: !1,
                nationality: "Afghan",
                totalMatches: 14,
                totalRuns: 83,
                totalWickets: 18,
                dateOfBirth: "20 September 1998",
                iplDebut: 2017
            }, {
                playerId: 1636819627869,
                playerName: "Rohit Sharma",
                playerTeam: C.MI,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png",
                playerRole: j.BATSMAN,
                isCaptain: !0,
                nationality: "Indian",
                totalMatches: 13,
                totalRuns: 381,
                totalWickets: 0,
                dateOfBirth: "30 April 1987",
                iplDebut: 2008
            }, {
                playerId: 1636819813209,
                playerName: "Quinton de Kock",
                playerTeam: C.MI,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/834.png",
                playerRole: j.WICKET_KEEPER,
                isCaptain: !1,
                nationality: "South African",
                totalMatches: 11,
                totalRuns: 297,
                totalWickets: 0,
                dateOfBirth: "17 December 1992",
                iplDebut: 2013
            }, {
                playerId: 1636820044256,
                playerName: "Jasprit Bumrah",
                playerTeam: C.MI,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png",
                playerRole: j.BOWLER,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 14,
                totalRuns: 16,
                totalWickets: 21,
                dateOfBirth: "06 December 1993",
                iplDebut: 2013
            }, {
                playerId: 1636820178280,
                playerName: "Kieron Pollard",
                playerTeam: C.MI,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/210.png",
                playerRole: j.ALL_ROUNDER,
                isCaptain: !1,
                nationality: "West Indian",
                totalMatches: 14,
                totalRuns: 245,
                totalWickets: 5,
                dateOfBirth: "\t12 May 1987",
                iplDebut: 2010
            }, {
                playerId: 1636820368125,
                playerName: "Hardik Pandya",
                playerTeam: C.MI,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png",
                playerRole: j.ALL_ROUNDER,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 12,
                totalRuns: 127,
                totalWickets: 0,
                dateOfBirth: "11 October 1993",
                iplDebut: 2015
            }, {
                playerId: 1636820968371,
                playerName: "MS Dhoni",
                playerTeam: C.CSK,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
                playerRole: j.WICKET_KEEPER,
                isCaptain: !0,
                nationality: "Indian",
                totalMatches: 16,
                totalRuns: 114,
                totalWickets: 0,
                dateOfBirth: "7 July 1981 ",
                iplDebut: 2007
            }, {
                playerId: 1636821134901,
                playerName: "Ravindra Jadeja",
                playerTeam: C.CSK,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/9.png",
                playerRole: j.ALL_ROUNDER,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 16,
                totalRuns: 227,
                totalWickets: 13,
                dateOfBirth: "06 December 1988 ",
                iplDebut: 2007
            }, {
                playerId: 1636821340668,
                playerName: " Faf du Plessis",
                playerTeam: C.CSK,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/24.png",
                playerRole: j.BATSMAN,
                isCaptain: !1,
                nationality: "South African",
                totalMatches: 16,
                totalRuns: 633,
                totalWickets: 0,
                dateOfBirth: "13 July 1984",
                iplDebut: 2011
            }, {
                playerId: 1636821410451,
                playerName: "Dwayne Bravo",
                playerTeam: C.CSK,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/25.png",
                playerRole: j.ALL_ROUNDER,
                isCaptain: !1,
                nationality: "West Indian",
                totalMatches: 11,
                totalRuns: 47,
                totalWickets: 14,
                dateOfBirth: "07 October 1983",
                iplDebut: 2008
            }, {
                playerId: 1636821489370,
                playerName: "Ruturaj Gaikwad",
                playerTeam: C.CSK,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5443.png",
                playerRole: j.BATSMAN,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 16,
                totalRuns: 635,
                totalWickets: 0,
                dateOfBirth: "31 January 1997",
                iplDebut: 2018
            }, {
                playerId: 1636821799178,
                playerName: "Virat Kohli",
                playerTeam: C.RCB,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png",
                playerRole: j.BATSMAN,
                isCaptain: !0,
                nationality: "Indian",
                totalMatches: 15,
                totalRuns: 405,
                totalWickets: 0,
                dateOfBirth: "05 November 1988",
                iplDebut: 2008
            }, {
                playerId: 1636821890716,
                playerName: "AB de villiers",
                playerTeam: C.RCB,
                playerImage: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/233.png",
                playerRole: j.WICKET_KEEPER,
                isCaptain: !1,
                nationality: "South African",
                totalMatches: 15,
                totalRuns: 313,
                totalWickets: 0,
                dateOfBirth: "17 February 1984",
                iplDebut: 2008
            }, {
                playerId: 1636821976898,
                playerName: "Glenn Maxwell",
                playerTeam: C.RCB,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png",
                playerRole: j.ALL_ROUNDER,
                isCaptain: !1,
                nationality: "Australian",
                totalMatches: 15,
                totalRuns: 513,
                totalWickets: 3,
                dateOfBirth: "14 October 1988",
                iplDebut: 2012
            }, {
                playerId: 1636822042224,
                playerName: "Yuzvendra Chahal",
                playerTeam: C.RCB,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/111.png",
                playerRole: j.BOWLER,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 15,
                totalRuns: 10,
                totalWickets: 18,
                dateOfBirth: "23 July 1990",
                iplDebut: 2013
            }, {
                playerId: 1636822109742,
                playerName: "Devdutt Padikkal",
                playerTeam: C.RCB,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5430.png",
                playerRole: j.BATSMAN,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 14,
                totalRuns: 411,
                totalWickets: 0,
                dateOfBirth: "\t07 July 2000",
                iplDebut: 2018
            }, {
                playerId: 1636823146357,
                playerName: "Rishabh Pant",
                playerTeam: C.DC,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
                playerRole: j.WICKET_KEEPER,
                isCaptain: !0,
                nationality: "Indian",
                totalMatches: 16,
                totalRuns: 419,
                totalWickets: 0,
                dateOfBirth: "04 october 1997",
                iplDebut: 2016
            }, {
                playerId: 1636823320530,
                playerName: "Anrich Nortje",
                playerTeam: C.DC,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/5433.png",
                playerRole: j.BOWLER,
                isCaptain: !1,
                nationality: "South African",
                totalMatches: 8,
                totalRuns: 0,
                totalWickets: 12,
                dateOfBirth: "16 November 1993",
                iplDebut: 2020
            }, {
                playerId: 1636823409466,
                playerName: "Kagiso Rabada",
                playerTeam: C.DC,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1664.png",
                playerRole: j.BOWLER,
                isCaptain: !1,
                nationality: "South African",
                totalMatches: 15,
                totalRuns: 13,
                totalWickets: 15,
                dateOfBirth: "25 May 1995",
                iplDebut: 2017
            }, {
                playerId: 1636823515954,
                playerName: "Shreyas Iyer",
                playerTeam: C.DC,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
                playerRole: j.BATSMAN,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 8,
                totalRuns: 175,
                totalWickets: 0,
                dateOfBirth: "6 December 1994",
                iplDebut: 2015
            }, {
                playerId: 1636823586473,
                playerName: "Shikhar Dhawan",
                playerTeam: C.DC,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/41.png",
                playerRole: j.BATSMAN,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 16,
                totalRuns: 587,
                totalWickets: 0,
                dateOfBirth: "5 December 1985",
                iplDebut: 2008
            }, {
                playerId: 1636823848072,
                playerName: "Sanju Samson",
                playerTeam: C.RR,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/258.png",
                playerRole: j.WICKET_KEEPER,
                isCaptain: !0,
                nationality: "Indian",
                totalMatches: 14,
                totalRuns: 484,
                totalWickets: 0,
                dateOfBirth: "11 November 1994",
                iplDebut: 2013
            }, {
                playerId: 1636824142971,
                playerName: "Chris Morris",
                playerTeam: C.RR,
                playerImage: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/836.png",
                playerRole: j.ALL_ROUNDER,
                isCaptain: !1,
                nationality: "South African",
                totalMatches: 11,
                totalRuns: 67,
                totalWickets: 15,
                dateOfBirth: "3 April 1987",
                iplDebut: 2013
            }, {
                playerId: 1636824671148,
                playerName: "Mustafizur Rehman",
                playerTeam: C.RR,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1594.png",
                playerRole: j.BOWLER,
                isCaptain: !1,
                nationality: "Bangladeshi",
                totalMatches: 14,
                totalRuns: 8,
                totalWickets: 14,
                dateOfBirth: "06 September 1995",
                iplDebut: 2016
            }, {
                playerId: 1636824746154,
                playerName: "Jos Buttler",
                playerTeam: C.RR,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/509.png",
                playerRole: j.WICKET_KEEPER,
                isCaptain: !1,
                nationality: "English",
                totalMatches: 7,
                totalRuns: 254,
                totalWickets: 0,
                dateOfBirth: "08 September 1990",
                iplDebut: 2016
            }, {
                playerId: 1636824814682,
                playerName: "Rahul Tewatia",
                playerTeam: C.RR,
                playerImage: "https://assets.iplt20.com/ipl/IPLHeadshot2022/1749.png",
                playerRole: j.BOWLER,
                isCaptain: !1,
                nationality: "Indian",
                totalMatches: 14,
                totalRuns: 155,
                totalWickets: 8,
                dateOfBirth: "20 May 1993",
                iplDebut: 2014
            }];
            Object.freeze(U);
            var V = t(26),
                J = t.n(V),
                q = function() {
                    var a = Object(o.a)({}, G);
                    return Object(_.jsx)("section", {
                        className: J.a.MainContainer,
                        children: Object(_.jsx)("div", {
                            className: J.a.TeamGrid,
                            children: Object.keys(a).map((function(e) {
                                var t = a[e];
                                return Object(_.jsx)(E, {
                                    teamCode: t.teamCode,
                                    themeStartColor: t.themeStartColor,
                                    themeEndColor: t.themeEndColor,
                                    teamLogo: t.teamLogo
                                }, t.teamCode)
                            }))
                        })
                    })
                },
                z = t(10),
                Y = t.n(z),
                X = function(a) {
                    return Object(_.jsxs)("div", {
                        className: Y.a.PlayerCard,
                        children: [Object(_.jsx)("div", {
                            className: Y.a.PlayerImageWrapper,
                            style: {
                                backgroundImage: function() {
                                    var e = G[a.playerTeam],
                                        t = "linear-gradient(45deg, ".concat(e.themeStartColor, ", ").concat(e.themeEndColor, ")");
                                    return console.log(t), t
                                }()
                            },
                            children: Object(_.jsx)("img", {
                                className: Y.a.PlayerImage,
                                src: a.playerImage,
                                alt: a.playerName
                            })
                        }), Object(_.jsxs)("div", {
                            className: Y.a.PlayerDataWrapper,
                            children: [Object(_.jsx)("h3", {
                                className: Y.a.PlayerName,
                                children: a.playerName
                            }), Object(_.jsxs)("div", {
                                className: Y.a.PlayerStatsWrapper,
                                children: [Object(_.jsxs)("div", {
                                    children: [Object(_.jsx)("p", {
                                        className: Y.a.StatValue,
                                        children: a.totalMatches
                                    }), Object(_.jsx)("h4", {
                                        className: Y.a.StatLabel,
                                        children: "Matches"
                                    })]
                                }), Object(_.jsxs)("div", {
                                    children: [Object(_.jsx)("p", {
                                        className: Y.a.StatValue,
                                        children: a.totalRuns
                                    }), Object(_.jsx)("h4", {
                                        className: Y.a.StatLabel,
                                        children: "Runs"
                                    })]
                                }), Object(_.jsxs)("div", {
                                    children: [Object(_.jsx)("p", {
                                        className: Y.a.StatValue,
                                        children: a.totalWickets
                                    }), Object(_.jsx)("h4", {
                                        className: Y.a.StatLabel,
                                        children: "Wickets"
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                Q = function(a) {
                    return !(void 0 !== a && null !== a && a.length > 0)
                },
                Z = function(a) {
                    return !(void 0 !== a && null !== a && Object.keys(a).length > 0)
                },
                $ = function(a) {
                    return !(void 0 !== a && null !== a && a.length > 0)
                },
                aa = t(5),
                ea = t.n(aa),
                ta = function(a) {
                    Object(m.a)(t, a);
                    var e = Object(h.a)(t);

                    function t() {
                        var a;
                        Object(p.a)(this, t);
                        for (var r = arguments.length, l = new Array(r), s = 0; s < r; s++) l[s] = arguments[s];
                        return (a = e.call.apply(e, [this].concat(l))).state = {
                            teamCode: null,
                            teamData: null,
                            playerData: []
                        }, a.updatePlayerList = function() {
                            if (Z(a.props.match) || Z(a.props.match.params) || Q(a.props.match.params.id)) a.setState({
                                teamCode: null,
                                teamData: null,
                                playerData: []
                            });
                            else {
                                var e = a.props.match.params.id,
                                    t = a.props.teamData[e],
                                    r = a.props.playerData.filter((function(a) {
                                        return a.playerTeam === e
                                    }));
                                a.setState({
                                    teamCode: e,
                                    teamData: t,
                                    playerData: r
                                })
                            }
                        }, a
                    }
                    return Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.updatePlayerList()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(a) {
                            Z(this.props.match) || Z(this.props.match.params) || Q(this.props.match.params.id) || a.match.params.id === this.props.match.params.id || this.updatePlayerList()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Q(this.state.teamCode) || Z(this.state.teamData) ? null : Object(_.jsxs)("div", {
                                className: ea.a.MainContainer,
                                children: [Object(_.jsxs)("div", {
                                    className: ea.a.TeamCard,
                                    children: [Object(_.jsx)("div", {
                                        className: ea.a.TeamImageWrapper,
                                        style: {
                                            backgroundImage: "linear-gradient(45deg, ".concat(this.state.teamData.themeStartColor, ", ").concat(this.state.teamData.themeEndColor, ")")
                                        },
                                        children: Object(_.jsx)("img", {
                                            className: ea.a.TeamLogo,
                                            src: this.state.teamData.teamLogo
                                        })
                                    }), Object(_.jsxs)("div", {
                                        className: ea.a.TeamMetaWrapper,
                                        children: [Object(_.jsx)("h1", {
                                            className: ea.a.MainHeading,
                                            children: this.state.teamData.name
                                        }), Object(_.jsxs)("div", {
                                            className: ea.a.StatsWrapper,
                                            children: [Object(_.jsx)("h4", {
                                                className: ea.a.StatsLabel,
                                                children: "Championships: "
                                            }), Object(_.jsx)("p", {
                                                className: ea.a.StatsValue,
                                                children: $(this.state.teamData.championships) ? "No championships won" : this.state.teamData.championships.join(", ")
                                            })]
                                        }), Object(_.jsxs)("div", {
                                            className: ea.a.StatsWrapper,
                                            children: [Object(_.jsx)("h4", {
                                                className: ea.a.StatsLabel,
                                                children: "Coach: "
                                            }), Object(_.jsx)("p", {
                                                className: ea.a.StatsValue,
                                                children: this.state.teamData.teamCoach
                                            })]
                                        }), Object(_.jsxs)("div", {
                                            className: ea.a.StatsWrapper,
                                            children: [Object(_.jsx)("h4", {
                                                className: ea.a.StatsLabel,
                                                children: "Captain: "
                                            }), Object(_.jsx)("p", {
                                                className: ea.a.StatsValue,
                                                children: this.state.teamData.teamCaptain
                                            })]
                                        })]
                                    })]
                                }), Object(_.jsx)("h3", {
                                    className: ea.a.MainHeading,
                                    children: "Player List"
                                }), Object(_.jsxs)("div", {
                                    className: ea.a.PlayersGrid,
                                    children: [this.state.playerData.map((function(a) {
                                        return Object(_.jsx)(X, Object(o.a)({}, a))
                                    })), $(this.state.playerData) ? Object(_.jsx)("h3", {
                                        className: ea.a.NoResults,
                                        children: "No Players Found"
                                    }) : null]
                                })]
                            })
                        }
                    }]), t
                }(l.a.Component),
                ra = ta,
                la = t(30),
                sa = t.n(la),
                na = t(21),
                ia = t.n(na),
                oa = function(a) {
                    Object(m.a)(t, a);
                    var e = Object(h.a)(t);

                    function t() {
                        var a;
                        Object(p.a)(this, t);
                        for (var r = arguments.length, l = new Array(r), s = 0; s < r; s++) l[s] = arguments[s];
                        return (a = e.call.apply(e, [this].concat(l))).state = {
                            searchParam: "",
                            searchResults: []
                        }, a.updateSearchResults = function() {
                            if (Z(a.props.location) || Q(a.props.location.search)) a.setState({
                                searchParam: "",
                                searchResults: []
                            });
                            else {
                                var e = a.props.location.search.split("=")[1],
                                    t = a.props.playerData.filter((function(a) {
                                        return a.playerName.toLocaleLowerCase().includes(e.toLocaleLowerCase())
                                    }));
                                a.setState({
                                    searchParam: e,
                                    searchResults: t
                                })
                            }
                        }, a
                    }
                    return Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.updateSearchResults()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(a) {
                            Z(a.location) || Q(a.location.search) || a.location.search === this.props.location.search || this.updateSearchResults()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(_.jsxs)("div", {
                                className: ia.a.MainContainer,
                                children: [Object(_.jsxs)("h1", {
                                    children: ["Search results for: ", this.state.searchParam]
                                }), Object(_.jsxs)("div", {
                                    className: ia.a.SearchResultGrid,
                                    children: [this.state.searchResults.map((function(a) {
                                        return Object(_.jsx)(X, Object(o.a)({}, a))
                                    })), $(this.state.searchResults) ? Object(_.jsx)("h3", {
                                        className: ia.a.NoResults,
                                        children: "No Results Found"
                                    }) : null]
                                })]
                            })
                        }
                    }]), t
                }(l.a.Component),
                pa = oa,
                ca = t(18),
                ma = t.n(ca),
                ha = function(a) {
                    Object(m.a)(t, a);
                    var e = Object(h.a)(t);

                    function t() {
                        var a;
                        Object(p.a)(this, t);
                        for (var r = arguments.length, l = new Array(r), s = 0; s < r; s++) l[s] = arguments[s];
                        return (a = e.call.apply(e, [this].concat(l))).onLoginClick = function(e) {
                            e.preventDefault(), Q(e.target.username.value) || Q(e.target.password.value) ? alert("Incorrect Login Credentials") : (a.props.onAdminLogin(), a.props.history.replace(T.HOME_PAGE))
                        }, a
                    }
                    return Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            return Object(_.jsx)("section", {
                                className: ma.a.MainContainer,
                                children: Object(_.jsxs)("form", {
                                    className: ma.a.LoginForm,
                                    onSubmit: this.onLoginClick,
                                    children: [Object(_.jsx)("h1", {
                                        className: ma.a.Heading,
                                        children: "Login"
                                    }), Object(_.jsx)("input", {
                                        className: ma.a.InputField,
                                        type: "text",
                                        placeholder: "Enter Username",
                                        name: "username"
                                    }), Object(_.jsx)("input", {
                                        className: ma.a.InputField,
                                        type: "password",
                                        placeholder: "Enter Password",
                                        name: "password"
                                    }), Object(_.jsx)(S, {
                                        label: "Login"
                                    })]
                                })
                            })
                        }
                    }]), t
                }(l.a.Component),
                da = ha,
                ua = t(3),
                ya = t.n(ua),
                ga = function(a) {
                    Object(m.a)(t, a);
                    var e = Object(h.a)(t);

                    function t() {
                        var a;
                        Object(p.a)(this, t);
                        for (var r = arguments.length, l = new Array(r), s = 0; s < r; s++) l[s] = arguments[s];
                        return (a = e.call.apply(e, [this].concat(l))).state = {
                            teamCode: "",
                            name: "",
                            teamLogo: "",
                            themeStartColor: "#000",
                            themeEndColor: "#000",
                            teamCoach: "",
                            teamCaptain: "",
                            championships: [],
                            showTeamCodeError: !1
                        }, a.teamListFromStorage = $(localStorage.getItem(O.TEAM_DATA)) ? [] : JSON.parse(localStorage.getItem(O.TEAM_DATA)), a.onFieldValueChange = function(e, t) {
                            switch (t) {
                                case "name":
                                    a.setState({
                                        name: e.target.value
                                    });
                                    break;
                                case "teamCode":
                                    a.setState({
                                        teamCode: e.target.value.toLowerCase()
                                    });
                                    break;
                                case "teamLogo":
                                    a.setState({
                                        teamLogo: e.target.value
                                    });
                                    break;
                                case "themeStartColor":
                                    a.setState({
                                        themeStartColor: e.target.value
                                    });
                                    break;
                                case "themeEndColor":
                                    a.setState({
                                        themeEndColor: e.target.value
                                    });
                                    break;
                                case "teamCoach":
                                    a.setState({
                                        teamCoach: e.target.value
                                    });
                                    break;
                                case "teamCaptain":
                                    a.setState({
                                        teamCaptain: e.target.value
                                    });
                                    break;
                                case "championships":
                                    a.setState({
                                        championships: e.target.value
                                    })
                            }
                        }, a.onCreateFormSubmit = function(e) {
                            if (e.preventDefault(), a.props.teamData[a.state.teamCode]) a.setState({
                                showTeamCodeError: !0
                            });
                            else {
                                a.setState({
                                    showTeamCodeError: !1
                                });
                                var t = {
                                    teamCode: a.state.teamCode,
                                    name: a.state.name,
                                    teamLogo: a.state.teamLogo,
                                    themeStartColor: a.state.themeStartColor,
                                    themeEndColor: a.state.themeEndColor,
                                    teamCoach: a.state.teamCoach,
                                    teamCaptain: a.state.teamCaptain,
                                    championships: a.state.championships.split(",")
                                };
                                a.props.createNewTeam(t), alert("New Team Created!"), a.props.history.push(T.HOME_PAGE)
                            }
                        }, a
                    }
                    return Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            var a = this;
                            return Object(_.jsx)("section", {
                                className: ya.a.MainContainer,
                                children: Object(_.jsxs)("form", {
                                    className: ya.a.CreationForm,
                                    onSubmit: this.onCreateFormSubmit,
                                    children: [Object(_.jsx)("h1", {
                                        className: ya.a.Heading,
                                        children: "Create Team"
                                    }), Object(_.jsxs)("div", {
                                        children: [Object(_.jsx)("p", {
                                            className: ya.a.Label,
                                            children: "Team Name"
                                        }), Object(_.jsx)("input", {
                                            className: ya.a.InputField,
                                            type: "text",
                                            name: "name",
                                            value: this.state.name,
                                            onInput: function(e) {
                                                return a.onFieldValueChange(e, "name")
                                            },
                                            required: !0
                                        })]
                                    }), Object(_.jsxs)("div", {
                                        children: [Object(_.jsx)("p", {
                                            className: ya.a.Label,
                                            children: "Team Code"
                                        }), Object(_.jsx)("input", {
                                            className: ya.a.InputField,
                                            type: "text",
                                            name: "teamCode",
                                            value: this.state.teamCode,
                                            onInput: function(e) {
                                                return a.onFieldValueChange(e, "teamCode")
                                            },
                                            required: !0
                                        }), this.state.showTeamCodeError ? Object(_.jsx)("p", {
                                            className: ya.a.Error,
                                            children: "Team Code is not unique. Please try again."
                                        }) : null]
                                    }), Object(_.jsxs)("div", {
                                        children: [Object(_.jsx)("p", {
                                            className: ya.a.Label,
                                            children: "Team Logo(URL)"
                                        }), Object(_.jsx)("input", {
                                            className: ya.a.InputField,
                                            type: "url",
                                            name: "teamLogo",
                                            value: this.state.teamLogo,
                                            onInput: function(e) {
                                                return a.onFieldValueChange(e, "teamLogo")
                                            },
                                            required: !0
                                        })]
                                    }), Object(_.jsxs)("div", {
                                        className: ya.a.ThemePickerWrapper,
                                        children: [Object(_.jsxs)("div", {
                                            children: [Object(_.jsx)("p", {
                                                className: ya.a.Label,
                                                children: "Team Theme Start Color"
                                            }), Object(_.jsx)("input", {
                                                type: "color",
                                                name: "themeStartColor",
                                                value: this.state.themeStartColor,
                                                onChange: function(e) {
                                                    return a.onFieldValueChange(e, "themeStartColor")
                                                },
                                                required: !0
                                            })]
                                        }), Object(_.jsxs)("div", {
                                            children: [Object(_.jsx)("p", {
                                                className: ya.a.Label,
                                                children: "End Color"
                                            }), Object(_.jsx)("input", {
                                                type: "color",
                                                name: "themeEndColor",
                                                value: this.state.themeEndColor,
                                                onChange: function(e) {
                                                    return a.onFieldValueChange(e, "themeEndColor")
                                                },
                                                required: !0
                                            })]
                                        })]
                                    }), Object(_.jsxs)("div", {
                                        children: [Object(_.jsx)("p", {
                                            className: ya.a.Label,
                                            children: "Coach Name"
                                        }), Object(_.jsx)("input", {
                                            className: ya.a.InputField,
                                            type: "text",
                                            name: "teamCoach",
                                            value: this.state.teamCoach,
                                            onInput: function(e) {
                                                return a.onFieldValueChange(e, "teamCoach")
                                            },
                                            required: !0
                                        })]
                                    }), Object(_.jsxs)("div", {
                                        children: [Object(_.jsx)("p", {
                                            className: ya.a.Label,
                                            children: "Captain Name"
                                        }), Object(_.jsx)("input", {
                                            className: ya.a.InputField,
                                            type: "text",
                                            name: "teamCaptain",
                                            value: this.state.teamCaptain,
                                            onInput: function(e) {
                                                return a.onFieldValueChange(e, "teamCaptain")
                                            },
                                            required: !0
                                        })]
                                    }), Object(_.jsxs)("div", {
                                        children: [Object(_.jsx)("p", {
                                            className: ya.a.Label,
                                            children: "Championship Years (Separated by comma)"
                                        }), Object(_.jsx)("input", {
                                            className: ya.a.InputField,
                                            type: "text",
                                            name: "championships",
                                            value: this.state.championships,
                                            onInput: function(e) {
                                                return a.onFieldValueChange(e, "championships")
                                            },
                                            required: !0
                                        })]
                                    }), Object(_.jsx)("div", {
                                        className: ya.a.ButtonWrapper,
                                        children: Object(_.jsx)(S, {
                                            label: "Create Team"
                                        })
                                    })]
                                })
                            })
                        }
                    }]), t
                }(l.a.Component),
                ba = ga,
                Ca = function(a) {
                    Object(m.a)(t, a);
                    var e = Object(h.a)(t);

                    function t() {
                        var a;
                        Object(p.a)(this, t);
                        for (var r = arguments.length, l = new Array(r), s = 0; s < r; s++) l[s] = arguments[s];
                        return (a = e.call.apply(e, [this].concat(l))).getTeamDataFromLocalStorage = function() {
                            var a = [];
                            return $(localStorage.getItem(O.TEAM_DATA)) ? (a = Object(o.a)({}, G), localStorage.setItem(O.TEAM_DATA, JSON.stringify(G))) : a = JSON.parse(localStorage.getItem(O.TEAM_DATA)), a
                        }, a.getPlayerDataFromLocalStorage = function() {
                            var a = [];
                            return $(localStorage.getItem(O.PLAYER_DATA)) ? (a = Object(i.a)(U), localStorage.setItem(O.PLAYER_DATA, JSON.stringify(U))) : a = JSON.parse(localStorage.getItem(O.PLAYER_DATA)), a
                        }, a.state = {
                            teamData: a.getTeamDataFromLocalStorage(),
                            playerData: a.getPlayerDataFromLocalStorage(),
                            loggedInStatus: "true" === localStorage.getItem(O.LOGIN_STATUS)
                        }, a.createNewTeam = function(e) {
                            var t = a.state.teamData;
                            t[e.teamCode] = e, localStorage.setItem(O.TEAM_DATA, JSON.stringify(t)), a.setState({
                                teamData: t
                            })
                        }, a.onUserLogin = function() {
                            a.setState({
                                loggedInStatus: !0
                            }), localStorage.setItem(O.LOGIN_STATUS, !0)
                        }, a.onUserLogout = function() {
                            a.setState({
                                loggedInStatus: !1
                            }), localStorage.setItem(O.LOGIN_STATUS, !1)
                        }, a
                    }
                    return Object(c.a)(t, [{
                        key: "render",
                        value: function() {
                            var a = this;
                            return Object(_.jsx)(d.a, {
                                children: Object(_.jsxs)("div", {
                                    className: sa.a.App,
                                    children: [Object(_.jsx)(N, {
                                        isUserLoggedIn: this.state.loggedInStatus,
                                        onUserLogout: this.onUserLogout
                                    }), Object(_.jsx)("main", {
                                        children: Object(_.jsxs)(u.c, {
                                            children: [Object(_.jsx)(u.a, {
                                                path: T.TEAM_DETAILS + "/:id",
                                                render: function(e) {
                                                    return Object(_.jsx)(ra, Object(o.a)(Object(o.a)({}, e), {}, {
                                                        teamData: a.state.teamData,
                                                        playerData: a.state.playerData
                                                    }))
                                                }
                                            }), Object(_.jsx)(u.a, {
                                                path: T.SEARCH_PAGE,
                                                render: function(e) {
                                                    return Object(_.jsx)(pa, Object(o.a)(Object(o.a)({}, e), {}, {
                                                        playerData: a.state.playerData
                                                    }))
                                                }
                                            }), Object(_.jsx)(u.a, {
                                                path: T.LOGIN_PAGE,
                                                render: function(e) {
                                                    return Object(_.jsx)(da, Object(o.a)(Object(o.a)({}, e), {}, {
                                                        onAdminLogin: a.onUserLogin
                                                    }))
                                                }
                                            }), Object(_.jsx)(u.a, {
                                                exact: !0,
                                                path: T.CREATE_TEAM_PAGE,
                                                render: function(e) {
                                                    return Object(_.jsx)(ba, Object(o.a)(Object(o.a)({}, e), {}, {
                                                        createNewTeam: a.createNewTeam,
                                                        teamData: a.state.teamData
                                                    }))
                                                }
                                            }), Object(_.jsx)(u.a, {
                                                exact: !0,
                                                path: T.HOME_PAGE,
                                                render: function(e) {
                                                    return Object(_.jsx)(q, Object(o.a)(Object(o.a)({}, e), {}, {
                                                        teamData: a.state.teamData
                                                    }))
                                                }
                                            })]
                                        })
                                    }), Object(_.jsx)("footer", {})]
                                })
                            })
                        }
                    }]), t
                }(l.a.Component),
                ja = Ca,
                Oa = function(a) {
                    a && a instanceof Function && t.e(3).then(t.bind(null, 47)).then((function(e) {
                        var t = e.getCLS,
                            r = e.getFID,
                            l = e.getFCP,
                            s = e.getLCP,
                            n = e.getTTFB;
                        t(a), r(a), l(a), s(a), n(a)
                    }))
                };
            n.a.render(Object(_.jsx)(l.a.StrictMode, {
                children: Object(_.jsx)(ja, {})
            }), document.getElementById("root")), Oa()
        },
        5: function(a, e, t) {
            a.exports = {
                MainContainer: "TeamDetailPage_MainContainer__jzWI4",
                TeamCard: "TeamDetailPage_TeamCard__1bf_z",
                TeamImageWrapper: "TeamDetailPage_TeamImageWrapper__d94Pw",
                TeamLogo: "TeamDetailPage_TeamLogo__3YzRh",
                TeamMetaWrapper: "TeamDetailPage_TeamMetaWrapper__1o_I-",
                MainHeading: "TeamDetailPage_MainHeading__1A_Be",
                PlayersGrid: "TeamDetailPage_PlayersGrid__3nPdR",
                NoResults: "TeamDetailPage_NoResults__3KmYP",
                StatsWrapper: "TeamDetailPage_StatsWrapper__2gWPZ",
                StatsLabel: "TeamDetailPage_StatsLabel__M-rGm",
                StatsValue: "TeamDetailPage_StatsValue__jCcwk"
            }
        }
    },
    [
        [46, 1, 2]
    ]
]);
//# sourceMappingURL=main.f326d290.chunk.js.map