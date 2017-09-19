<template>
  <div class="responsive_page_frame with_header main-container">
    <div class="responsive_header">
      <div class="responsive_header_content">
        <div id="responsive_menu_logo">
          <img src="https://steamcommunity-a.akamaihd.net/public/shared/images/responsive/header_menu_hamburger.png" height="100%">
          <div class="responsive_header_notification_badge_ctn">
            <div class="responsive_header_notification_badge notification_count_total_ctn has_notifications">
              <span class="notification_count">4</span>
            </div>
          </div>
        </div>
        <div class="responsive_header_logo">
          <img src="https://steamcommunity-a.akamaihd.net/public/shared/images/responsive/header_logo.png" height="36" border="0" alt="STEAM">
        </div>
      </div>
    </div>

    <div class="responsive_page_content_overlay">

    </div>

    <div class="responsive_fixonscroll_ctn nonresponsive_hidden ">
    </div>

    <div class="responsive_page_content">

      <div class="responsive_page_template_content">

        <div class="no_header profile_page has_profile_background " :style="{ backgroundImage: `url('${$store.state.background}')` }">

          <div class="profile_header_bg">

            <div class="profile_header_bg_texture">

              <div class="profile_header">

                <div class="profile_header_content">

                  <div class="profile_header_centered_persona">
                    <div class="persona_name" style="font-size: 24px;">
                      <span class="actual_persona_name">SloWolfe</span>
                      <span class="namehistory_link" onclick="ShowAliasPopup( this );">
                        <img id="getnamehistory_arrow" src="https://steamcommunity-a.akamaihd.net/public/images/skin_1/arrowDn9x5.gif" width="9" height="5" border="0">
                      </span>
                      <div id="NamePopup" class="popup_block_new" style="display: none;">
                        <div class="popup_body popup_menu">
                          <div>This user has also played as:</div>
                          <div id="NamePopupAliases">

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="header_real_name ellipsis">
                      <bdi>Dumbfuck</bdi>
                      &nbsp;
                      <img class="profile_flag" src="https://steamcommunity-a.akamaihd.net/public/images/countryflags/ca.gif"> Canada </div>
                  </div>

                  <div class="playerAvatar profile_header_size in-game">
                    <div class="playerAvatarAutoSizeInner"><img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/37/37e014b7e7ecdf3e7516fd6c973ed3c2d029a80c_full.jpg"></div>
                  </div>
                  <div class="profile_header_badgeinfo">
                    <div class="profile_header_badgeinfo_badge_area">
                      <a href="https://steamcommunity.com/id/wolfenstian/badges">
                        <div class="persona_name persona_level">Level
                          <div class="friendPlayerLevel lvl_60">
                            <span class="friendPlayerLevelNum">63</span>
                          </div>
                        </div>
                      </a>
                      <div class="profile_header_badge">
                        <div class="favorite_badge">
                          <div class="favorite_badge_icon" data-community-tooltip="You are a perfect lolicon!<br>
                                                    Level 5 Mayjasmine episode01 What is God? 五月茉莉 Badge">
                            <a class="whiteLink" href="https://steamcommunity.com/id/wolfenstian/gamecards/417110">
                              <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/417110/eb3ebf7b6f1ca9302fb8dd6595fd178572c90c8d.png" class="badge_icon small">
                            </a>
                          </div>
                          <div class="favorite_badge_description">
                            <div class="name ellipsis">
                              <a class="whiteLink" href="https://steamcommunity.com/id/wolfenstian/gamecards/417110">You are a perfect lolicon!</a>
                            </div>
                            <div class="xp">500 XP</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="profile_header_actions">
                      <a class="btn_profile_action btn_medium" href="javascript:LaunchWebChat( {friend: 68667764 } );">
                        <span>Send a Message</span>
                      </a>
                      <span class="btn_profile_action btn_medium" id="profile_action_dropdown_link" onclick="ShowMenu( this, 'profile_action_dropdown', 'right' );">
                        <span>More <img src="https://steamcommunity-a.akamaihd.net/public/images/profile/profile_action_dropdown.png"></span>
                      </span>
                      <div class="popup_block" id="profile_action_dropdown" style="display: none;">
                        <div class="shadow_ul"></div>
                        <div class="shadow_top"></div>
                        <div class="shadow_ur"></div>
                        <div class="shadow_left"></div>
                        <div class="shadow_right"></div>
                        <div class="shadow_bl"></div>
                        <div class="shadow_bottom"></div>
                        <div class="shadow_br"></div>
                        <div class="popup_body popup_menu shadow_content">
                          <a class="popup_menu_item" href="javascript:void(0);" onclick="PresentGroupInviteOptions();"><img src="https://steamcommunity-a.akamaihd.net/public/images/profile/icon_invitegroup.png">&nbsp; Invite to Join Your Group</a>
                          <div class="profile_actions_follow">
                            <a style="" class="popup_menu_item follow_button" href="#" onclick="SetFollowing(true, function(bFollowing){ $J('.follow_button').hide(); $J('.unfollow_button').show();  }); HideMenu( 'profile_action_dropdown_link', 'profile_action_dropdown' ); return false;"><img src="https://steamcommunity-a.akamaihd.net/public/images/sharedfiles/add_fav_ico_default.png">&nbsp; Follow</a>
                            <a style="display: none;" class="popup_menu_item unfollow_button" href="#" onclick="SetFollowing(false, function(bFollowing){ $J('.follow_button').show(); $J('.unfollow_button').hide();  }); HideMenu( 'profile_action_dropdown_link', 'profile_action_dropdown' ); return false;"><img src="https://steamcommunity-a.akamaihd.net/public/images/sharedfiles/add_fav_ico_default.png">&nbsp; Stop Following</a>
                          </div>
                          <a class="popup_menu_item" href="#" onclick="ShowNicknameModal(); HideMenu( 'profile_action_dropdown_link', 'profile_action_dropdown' ); return false;"><img src="https://steamcommunity-a.akamaihd.net/public/images/skin_1/notification_icon_edit_bright.png">&nbsp; Add Nickname</a>
                          <a class="popup_menu_item" href="#" onclick="StartTradeOffer( 68667764 ); HideMenu( 'profile_action_dropdown_link', 'profile_action_dropdown' ); return false;"><img src="https://steamcommunity-a.akamaihd.net/public/images/profile/icon_tradeoffers.png">&nbsp; Offer a Trade...</a>
                          <a class="popup_menu_item" href="javascript:ConfirmBlock();"><img src="https://steamcommunity-a.akamaihd.net/public/images/profile/icon_block.png">&nbsp; Block All Communication</a>
                          <a class="popup_menu_item" href="#" onclick="ShowAbuseDialog(); HideMenu( 'profile_action_dropdown_link', 'profile_action_dropdown' ); return false;"><img src="https://steamcommunity-a.akamaihd.net/public/images/skin_1/notification_icon_flag.png" style="margin: 0 1px;">&nbsp; Report Violation</a>
                          <a class="popup_menu_item" href="javascript:RemoveFriend();"><img src="https://steamcommunity-a.akamaihd.net/public/images/profile/icon_unfriend.png">&nbsp; Unfriend</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="profile_header_summary">
                    <div class="persona_name persona_name_spacer" style="font-size: 24px;">
                      <span class="actual_persona_name">&nbsp;</span>
                    </div>
                    <div class="header_real_name_spacer">&nbsp;</div>
                    <div class="profile_summary noexpand">
                      <a class="bb_link" href="http://steamcommunity.com/tradeoffer/new/?partner=68667764&amp;token=JJe3A_Og" target="_blank" rel="noreferrer">Trade Offer Link</a> |
                      <a class="bb_link" href="https://steamcommunity.com/linkfilter/?url=https://steam.design/" target="_blank" rel="noreferrer">Cropping Tool</a>
                      <span class="bb_link_host">[steam.design]</span><br>Did something with backgrounds that one time. If you need help with the site, join the discord.
                      <a class="bb_link" href="https://steamcommunity.com/linkfilter/?url=https://discord.gg/jnqnHuX" target="_blank" rel="noreferrer">Steam.design support</a>
                      <span class="bb_link_host">[discord.gg]</span><br>
                      <a class="bb_link" href="http://steamcommunity.com/my" target="_blank" rel="noreferrer">
                        <u>View more info</u>
                      </a>
                    </div>
                    <div class="profile_summary_footer" style="display: none;">
                      <span class="whiteLink">View more info</span>
                    </div>
                    <script type="text/javascript">
                    $J(function() {
                      InitProfileSummary(g_rgProfileData['summary']);
                    });
                    </script>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="profile_content has_profile_background">

            <div class="profile_background_holder_content">
              <div class="profile_background_overlay_content"></div>
              <div class="profile_background_image_content" :style="{ backgroundImage: `url('${$store.state.background}')` }">
              </div>
            </div>
            <div class="profile_content_inner">

              <div class="profile_rightcol">
                <div class="responsive_status_info">
                  <div class="profile_in_game persona in-game">
                    <div class="profile_in_game_header">Currently In-Game</div>
                    <div class="profile_in_game_name">Terraria</div>

                    <div class="profile_in_game_joingame">
                      <a href="steam://" class="btn_green_white_innerfade btn_small_thin">
                        <span>Join Game</span>
                      </a>
                      <a href="http://steamcommunity.com/broadcast/watch/76561198028933492" class="btn_grey_white_innerfade btn_small_thin">
                        <span>Watch Game</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="responsive_count_link_area">
                  <div class="profile_badges">
                    <div class="profile_count_link_preview_ctn">
                      <div class="profile_count_link ellipsis">
                        <a href="https://steamcommunity.com/id/wolfenstian/badges/">
                          <span class="count_link_label">Badges</span>&nbsp;
                          <span class="profile_count_link_total">
                            67 </span>
                        </a>
                      </div>
                      <div class="profile_count_link_preview">
                        <div class="profile_badges_badge " data-community-tooltip="Game Mechanic<br>
                                                    355 games owned">
                          <a href="https://steamcommunity.com/id/wolfenstian/badges/13">
                            <img src="https://steamcommunity-a.akamaihd.net/public/images/badges/13_gamecollector/250_54.png?v=4" class="badge_icon small">
                          </a>
                        </div>
                        <div class="profile_badges_badge " data-community-tooltip="Years of Service<br>
                                                    Member since 13 August, 2010.">
                          <a href="https://steamcommunity.com/id/wolfenstian/badges/1">
                            <img src="https://steamcommunity-a.akamaihd.net/public/images/badges/02_years/steamyears702_54.png" class="badge_icon small">
                          </a>
                        </div>
                        <div class="profile_badges_badge " data-community-tooltip="Sticker Completionist<br>
                                                    Collected and placed every sticker in the 2017 Steam Summer Sale.">
                          <a href="https://steamcommunity.com/id/wolfenstian/badges/26">
                            <img src="https://steamcommunity-a.akamaihd.net/public/images/badges/26_summer2017_sticker/completionist.png" class="badge_icon small">
                          </a>
                        </div>
                        <div class="profile_badges_badge last" data-community-tooltip="Level 1<br>
                                                    Level 1 Sweet fantasy Badge">
                          <a href="https://steamcommunity.com/id/wolfenstian/gamecards/612110">
                            <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/612110/197378569fe289ba15fdbd2521cdee6f5bfcf63b.png" class="badge_icon small">
                          </a>
                        </div>
                        <div style="clear: left;"></div>
                      </div>
                    </div>
                  </div>

                  <div id="responsive_groupfriends_element_ctn">
                  </div>

                  <div class="profile_item_links">
                    <div class="profile_count_link ellipsis">
                      <a href="https://steamcommunity.com/id/wolfenstian/games/?tab=all">
                        <span class="count_link_label">Games</span>&nbsp;
                        <span class="profile_count_link_total">
                          355 </span>
                      </a>
                    </div>
                    <div class="profile_count_link ellipsis">
                      <a href="https://steamcommunity.com/id/wolfenstian/inventory/">
                        <span class="count_link_label">Inventory</span>&nbsp;
                        <span class="profile_count_link_total">
                          &nbsp;
                          <!-- so the line spaces like the rest -->
                        </span>
                      </a>
                    </div>
                    <div class="profile_count_link ellipsis">
                      <a href="https://steamcommunity.com/id/wolfenstian/screenshots/">
                        <span class="count_link_label">Screenshots</span>&nbsp;
                        <span class="profile_count_link_total">
                          797 </span>
                      </a>
                    </div>
                    <div class="profile_count_link ellipsis">
                      <a href="https://steamcommunity.com/id/wolfenstian/recommended/">
                        <span class="count_link_label">Reviews</span>&nbsp;
                        <span class="profile_count_link_total">
                          1 </span>
                      </a>
                    </div>
                    <div class="profile_count_link ellipsis">
                      <a href="https://steamcommunity.com/id/wolfenstian/myworkshopfiles/?section=guides">
                        <span class="count_link_label">Guides</span>&nbsp;
                        <span class="profile_count_link_total">
                          2 </span>
                      </a>
                    </div>
                    <div class="profile_count_link ellipsis">
                      <a href="https://steamcommunity.com/id/wolfenstian/images/">
                        <span class="count_link_label">Artwork</span>&nbsp;
                        <span class="profile_count_link_total">
                          4 </span>
                      </a>
                    </div>
                    <div style="clear: left;"></div>
                  </div>
                </div>

                <div>
                  <div class="profile_group_links profile_count_link_preview_ctn responsive_groupfriends_element">
                    <div class="profile_count_link ellipsis">
                      <a href="https://steamcommunity.com/id/wolfenstian/groups/">
                        <span class="count_link_label">Groups</span>&nbsp;
                        <span class="profile_count_link_total">
                          21 </span>
                      </a>
                    </div>
                    <div class="profile_in_common responsive_hidden">
                      You have
                      <a class="whiteLink" href="https://steamcommunity.com/id/wolfenstian/groupscommon/">1 group</a> in common </div>
                    <div class="profile_count_link_preview">
                      <div class="profile_group profile_primary_group">
                        <div class="profile_group_avatar">
                          <a href="https://steamcommunity.com/groups/sapic">
                            <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e0/e00322490d93036613808cd2045dc5e563b13054_medium.jpg">
                          </a>
                        </div>
                        <a class="whiteLink" href="https://steamcommunity.com/groups/sapic">
                          SAPIC </a>
                        <div class="profile_group_membercount">984 Members</div>
                        <div style="clear: left;"></div>
                      </div>
                      <div class="profile_group">
                        <div class="profile_group_avatar">
                          <a href="https://steamcommunity.com/groups/horobox">
                            <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c4/c4e0cd46131d412abedaf776aa16b7ad11ce9a2d.jpg">
                          </a>
                        </div>
                        <a class="whiteLink" href="https://steamcommunity.com/groups/horobox">
                          HoroBox </a>
                        <div class="profile_group_membercount">379 Members</div>
                        <div style="clear: left;"></div>
                      </div>
                      <div class="profile_group">
                        <div class="profile_group_avatar">
                          <a href="https://steamcommunity.com/groups/TF2R-D">
                            <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/5f/5f038407f2c030f3f0f634424059b9be1ebc8f9e.jpg">
                          </a>
                        </div>
                        <a class="whiteLink" href="https://steamcommunity.com/groups/TF2R-D">
                          TF2R.com Development Group </a>
                        <div class="profile_group_membercount">25,271 Members</div>
                        <div style="clear: left;"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="profile_friend_links profile_count_link_preview_ctn responsive_groupfriends_element">
                    <div class="profile_count_link ellipsis">
                      <a href="https://steamcommunity.com/id/wolfenstian/friends/">
                        <span class="count_link_label">Friends</span>&nbsp;
                        <span class="profile_count_link_total">
                          147 </span>
                      </a>
                    </div>

                    <div class="profile_in_common responsive_hidden">
                      You have
                      <a class="whiteLink" href="javascript:ShowFriendsInCommon( 68667764 );">8 friends</a> in common </div>

                    <div class="profile_topfriends profile_count_link_preview">
                      <div class="friendBlock persona offline" data-miniprofile="143177627">
                        <a class="friendBlockLinkOverlay" href="https://steamcommunity.com/id/mecares"></a>
                        <div class="friendPlayerLevel lvl_200 lvl_plus_80">
                          <span class="friendPlayerLevelNum">280</span>
                        </div>
                        <div class="playerAvatar offline">
                          <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/37/378611ee03aee6e0e206a302e36d412c7c7c82ca_medium.jpg">
                        </div>
                        <div class="friendBlockContent">
                          exo<br>
                          <span class="friendSmallText">
                            Last Online 33 mins ago
                          </span>
                        </div>
                      </div>
                      <div class="friendBlock persona in-game" data-miniprofile="88233003">
                        <a class="friendBlockLinkOverlay" href="https://steamcommunity.com/id/TheOddball"></a>
                        <div class="friendPlayerLevel lvl_200 lvl_plus_60">
                          <span class="friendPlayerLevelNum">262</span>
                        </div>
                        <div class="friendBlockStatusIcon">
                          <img src="https://steamcommunity-a.akamaihd.net/public/images/skin_1/friend_indicator.png" height="16" width="16" title="This member is a friend">
                        </div>
                        <div class="playerAvatar in-game">
                          <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/89/897e1d30cb4b02271daf45c228066429a797444b_medium.jpg">
                        </div>
                        <div class="friendBlockContent">
                          The Oddball<br>
                          <span class="friendSmallText">
                            <span class="linkFriend_in-game">In-Game<br>Team Fortress 2</span>
                          </span>
                        </div>
                      </div>
                      <div class="friendBlock persona online" data-miniprofile="81923623">
                        <a class="friendBlockLinkOverlay" href="https://steamcommunity.com/id/BearCute"></a>
                        <div class="friendPlayerLevel lvl_200 lvl_plus_50">
                          <span class="friendPlayerLevelNum">257</span>
                        </div>
                        <div class="playerAvatar online">
                          <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c9/c936624b75e9ae1e2f220e7d0fb2f924b31712fa_medium.jpg">
                        </div>
                        <div class="friendBlockContent">
                          🌈Ｂℴｂ☆ʙᴏʙ🌸<br>
                          <span class="friendSmallText">
                            Online
                          </span>
                        </div>
                      </div>
                      <div class="friendBlock persona offline" data-miniprofile="252445180">
                        <a class="friendBlockLinkOverlay" href="https://steamcommunity.com/id/ElSalvadore8"></a>
                        <div class="friendPlayerLevel lvl_200 lvl_plus_20">
                          <span class="friendPlayerLevelNum">220</span>
                        </div>
                        <div class="playerAvatar offline">
                          <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a6/a69b7433fb8fcf85cf468cc7ef88a1cdaac7c22f_medium.jpg">
                        </div>
                        <div class="friendBlockContent">
                          Malignity<br>
                          <span class="friendSmallText">
                            Last Online 13 mins ago
                          </span>
                        </div>
                      </div>
                      <div class="friendBlock persona offline" data-miniprofile="74581638">
                        <a class="friendBlockLinkOverlay" href="https://steamcommunity.com/id/Zordack"></a>
                        <div class="friendPlayerLevel lvl_200 lvl_plus_0">
                          <span class="friendPlayerLevelNum">206</span>
                        </div>
                        <div class="friendBlockStatusIcon">
                          <img src="https://steamcommunity-a.akamaihd.net/public/images/skin_1/friend_indicator.png" height="16" width="16" title="This member is a friend">
                        </div>
                        <div class="playerAvatar offline">
                          <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1b/1b9efffffecbbe58484fc5b673e58a058ddff567_medium.jpg">
                        </div>
                        <div class="friendBlockContent">
                          Zordack<br>
                          <span class="friendSmallText">
                            Last Online 27 hrs, 57 mins ago
                          </span>
                        </div>
                      </div>
                      <div class="friendBlock persona in-game" data-miniprofile="268438332">
                        <a class="friendBlockLinkOverlay" href="https://steamcommunity.com/id/Ayylmao1911"></a>
                        <div class="friendPlayerLevel lvl_200 lvl_plus_0">
                          <span class="friendPlayerLevelNum">205</span>
                        </div>
                        <div class="playerAvatar in-game">
                          <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/bc/bcfb86c8db82a3b67f9370d515ccb54920c45dfa_medium.jpg">
                        </div>
                        <div class="friendBlockContent">
                          Ayylmao1911-IDLE<br>
                          <span class="friendSmallText">
                            <span class="linkFriend_in-game">In-Game<br>Lex Mortis</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div class="profile_leftcol">

                <div class="profile_customization_area">

                  <div class="profile_customization">
                    <div class="profile_customization_header">Artwork Showcase</div>

                    <div class="profile_customization_block">
                      <div class="screenshot_showcase">
                        <div class="screenshot_showcase_primary showcase_slot ">
                          <a class="screenshot_showcase_screenshot modalContentLink" href="https://steamcommunity.com/sharedfiles/filedetails/?id=368116037">
                            <div class="profile_main_artbox" :style="{ backgroundImage: `url('${$store.state.background}')` }"> </div>
                            <!-- <img width="100%" style="max-width: 506px;" :src="$store.state.background"> -->
                          </a>
                          <div class="screenshot_showcase_itemname">
                            Glitch </div>
                          <div class="screenshot_showcase_stats">
                            <span class="screenshot_showcase_stat" title="Up Votes">
                              <img class="screenshot_showcase_staticon" src="https://steamcommunity-a.akamaihd.net/public/images/sharedfiles/icons/icon_rate.png"> 218 </span>
                            <span class="screenshot_showcase_stat" title="Comments">
                              <img class="screenshot_showcase_staticon" src="https://steamcommunity-a.akamaihd.net/public/images/skin_1/icon_btn_comment.png"> 41 </span>
                            <span class="screenshot_showcase_stat" title="Favorites">
                              <span class="screenshot_showcase_staticon favorite"></span> 16 </span>
                          </div>
                        </div>
                        <div class="screenshot_showcase_rightcol">
                          <div class="screenshot_showcase_smallscreenshot showcase_slot ">
                            <a class="screenshot_showcase_screenshot modalContentLink" href="https://steamcommunity.com/sharedfiles/filedetails/?id=756373801">
                              <div class="profile_main_artbox_side1" :style="{ backgroundImage: `url('${$store.state.background}')` }"> </div>
                              <!-- <img width="100%" style="max-width: 100px;" :src="$store.state.background"> -->
                            </a>
                          </div>
                          <a class="screenshot_showcase_smallscreenshot screenshot_count" href="https://steamcommunity.com/id/wolfenstian/images/">
                            <div class="screenshot_showcase_screenshot">
                              + 2 </div>
                          </a>
                        </div>
                        <div style="clear: both;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style="clear: both;"></div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div class="bgPreloader" style="display: none" v-for="background in nextBackgrounds" v-bind:key="background.url">
      <img :src="background.steamUrl">
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    nextBackgrounds() {
      return this.$store.state.nextRandomBackgrounds
    }
  }
}
</script>

<style scoped>
.profile_main_artbox {
  width: 100%;
  height: 850px;
  background-position: -508px -271px;
}

.profile_main_artbox_side1 {
  width: 100%;
  height: 850px;
  background-position: -1022px -271px;
}

.main-container { 
  flex: 0 1 auto;
}
</style>

<style scoped src="~/assets/css/buttons.css"></style>
<style scoped src="~/assets/css/globalv2.css"></style>
<style scoped src="~/assets/css/header.css"></style>
<style scoped src="~/assets/css/modalContent.css"></style>
<style scoped src="~/assets/css/motiva_sans.css"></style>
<style scoped src="~/assets/css/profilev2.css"></style>
<style scoped src="~/assets/css/shared_global.css"></style>
<style scoped src="~/assets/css/shared_responsive.css"></style>
<style scoped src="~/assets/css/stickers.css"></style>