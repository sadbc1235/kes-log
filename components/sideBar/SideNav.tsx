'use client'

import Menu from "./menu/Menu";
import MenuItem from "./menu/MenuItem";

export default function SideNav() {
    const testMenuArr = [
        {
            menuCode: 'MENU_1'
            , menuName: 'MENU 1'
            , articleCnt: 12
            , subMenuList: [
                {
                    menuCode: 'MENU_1_1'
                    , subMenuName: 'SUB MENU 1-1'
                    , articleCnt: 10
                }
                , {
                    menuCode: 'MENU_1_2'
                    , subMenuName: 'SUB MENU 1-2'
                    , articleCnt: 2
                }
                , {
                    menuCode: 'MENU_1_3'
                    , subMenuName: 'SUB MENU 1-3'
                    , articleCnt: 0
                }
            ]
        }
        , {
            menuCode: 'MENU_2'
            , menuName: 'MENU 2'
            , articleCnt: 0
            , subMenuList: [
                {
                    menuCode: 'MENU_2_1'
                    , subMenuName: 'SUB MENU 2-1'
                    , articleCnt: 0
                }
                , {
                    menuCode: 'MENU_2_2'
                    , subMenuName: 'SUB MENU 2-2'
                    , articleCnt: 0
                }
            ]
        }
    ]

    return (
        <nav
            className="w-full p-3 pt-7"
        >
            <Menu menuList={testMenuArr}>
                <MenuItem/>
            </Menu>
        </nav>
    );
  }
  