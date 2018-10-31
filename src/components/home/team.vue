<template>
    <div class="team-container">
        <h2 class="title">The VARRAM team</h2>
        <div class="teams">
            <ul>
                <li v-for="team in teams"><a v-html="team.title" class="nav-link" v-bind:class="{activeteam: team.title == selectedTeam}" @click="changeTeam(team.title)"></a></li>
            </ul>
        </div>
        <transition-group class="members" name="fade" tag="div">
                <div class="member" v-for="team in teams" v-bind:key="team" v-if="team.title == selectedTeam">
                    <div class="memb" v-for="member in team.members" v-bind:key="member">
                        <img :src="member.source" :alt="member.name">
                        <span v-html="member.name"></span>
                    </div>
                </div>
        </transition-group>
        <div class="btn">
        <router-link class="ourStory" to="/history" title="Link to story page">Our history</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'team',
    data() {
        return {
            teams: [
                {
                    title: 'Design team',
                    members: [
                        {
                            name: 'Kim Kyung-Nam',
                            source: '../../../static/img/team/design/kimKyungNam.png'
                        },
                        {
                            name: 'Lee Yeon-hee',
                            source: '../../../static/img/team/design/leeYeonHee.png'
                        }
                    ]
                },
                {
                    title: 'Marketing team',
                    members: [
                        {
                            name: 'Suh Byung Jo',
                            source: '../../../static/img/team/marketing/suhByungJo.png'
                        },
                        {
                            name: 'Kim Bee-Oh',
                            source: '../../../static/img/team/marketing/kimBeeOh.png'
                        },
                        {
                            name: 'Lee Dong-Hee',
                            source: '../../../static/img/team/marketing/leeDongHee.png'
                        }
                    ]
                },
                {
                    title: 'SW Team',
                    members: [
                        {
                            name: 'Bae Dong-ho',
                            source: '../../../static/img/team/SW/baeDongHo.png'
                        },
                        {
                            name: 'Son Jin-Ho',
                            source: '../../../static/img/team/SW/sonJinHo.png'
                        },
                        {
                            name: 'Han Gyung-Su',
                            source: '../../../static/img/team/SW/hanGyungSu.png'
                        }
                    ]
                },
                {
                    title: 'HW team - electronic',
                    members: [
                        {
                            name: 'Jung Ju-Yong',
                            source: '../../../static/img/team/technic/jungJuYong.png'
                        },
                        {
                            name: 'Lee Kwang-Ho',
                            source: '../../../static/img/team/technic/leeKwangHo.png'
                        },
                        {
                            name: 'Kim Bum-Seok',
                            source: '../../../static/img/team/technic/kimBumSeok.png'
                        }
                    ]
                },
                {
                    title: 'HW team - mechanic',
                    members: [
                        {
                            name: 'Kim Kyong-Seok',
                            source: '../../../static/img/team/mechanic/kimKyongSeok.png'
                        },
                        {
                            name: 'Kim Kyung-Tae',
                            source: '../../../static/img/team/mechanic/kimKyungTae.png'
                        },
                        {
                            name: 'Kim Jin-Hyun',
                            source: '../../../static/img/team/mechanic/kimJinHyun.png'
                        }
                    ]
                }
            ],
            selectedTeam: 'Design team'
        }
    },
    methods: {
        changeTeam(team) {
            this.selectedTeam = team
        }
    }
}
</script>
<style lang="scss" scoped>
    .team-container {
            .btn {
                text-align: center;
                width: 100%;
                
                .ourStory {
                    color: black;
                    background: white;
                    font-family: 'Exo', sans-serif;
                    font-size: 26px;
                    border: 1px solid #707070;
                    border-radius: 40px;
                    padding: 20px 40px;
                    position: relative;
                    transition: .3s;

                    &:hover {
                        background: black;
                        color: white;
                    }
                }
            }
            
        }


    h2 {
      font-size: 40px;
      font-family: 'Exo', sans-serif;
      text-align: center;
    }

    .teams {
      font-family: 'Exo', sans-serif;
      font-size: 20px;
      margin-top: 60px;
      padding: 0 40px;

      ul {
        display: flex;
        justify-content: space-between;
        padding-left: 0;

        li {
          list-style: none;

          .nav-link {
            position: relative;
            color: black;

            &:hover {
              cursor: pointer;
            }

            &::after {
              content: "";
              display: block;
              width: 0px;
              height: 1px;
              background: #22B8FD;
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              transition: 0.2s;

            }

            &:hover::after {
              width: 50px;
            }
          }
        }

        .activeteam {
          position: relative;

          &::after {
            content: "";
            display: block;
            width: 50px !important;
            height: 1px;
            background: #22B8FD;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }

    .members {
      margin: 100px 50px;

      .member {
        display: flex;
        justify-content: space-around;
        width: 60%;
        margin: 0 auto;

        .memb {
          position: relative;
          border-radius: 50%;

          &:hover img {
            transform: scale(1.2) rotate(10deg);
          }

          img {
            width: 150px;
            transition: 0.3s ease-out;
          }

          span {
            border: 1px solid #22B8FD;
            padding: 10px;
            background: white;
            position: absolute;
            top: -10px;
            right: -70px;
          }
        }
      }
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 2s;
    }

    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }

    @media screen and (max-width: 400px) {
      .team-container {
        h2 {
          color: black;
        }

        .teams {
          ul {
            flex-wrap: wrap;

            li {
              font-size: 13px;
              margin-top: 20px;
            }
          }
      }

      .btn {
        text-align: center;
        width: 100%;
        margin-top: 60px; 

        .kickstarterButton {
          font-size: 15px;
          padding: 10px;
        }
      }
    }

    .members {
        width: 100%;
        margin: 0;

            .member {
              display: flex;
              justify-content: space-around;
              width: 100%;

              .memb {
                position: relative;
                border-radius: 50%;

                &:hover img {
                  transform: scale(1.2) rotate(10deg);
                }

                img {
                  width: 100px;
                }

                span {
                    padding: 5px;
                    font-size: 15px;
                    top: auto;
                    bottom: -10px;
                    right: 50%;
                    transform: translateX(50%);
                    width: 115px;
                    text-align: center;
                }
              }
            }
          }
        }

</style>
