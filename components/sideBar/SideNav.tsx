'use client'

import Menu from "./menu/Menu";
import MenuItem from "./menu/MenuItem";

export default function SideNav() {
    const testMenuArr = [
        {
            menuName: 'MENU 1'
            , articleCnt: 12
            , subMenuList: [
                {
                    subMenuName: 'SUB MENU 1-1'
                    , articleCnt: 10
                }
                , {
                    subMenuName: 'SUB MENU 1-2'
                    , articleCnt: 2
                }
                , {
                    subMenuName: 'SUB MENU 1-3'
                    , articleCnt: 0
                }
            ]
        }
        , {
            menuName: 'MENU 2'
            , articleCnt: 0
            , subMenuList: [
                {
                    subMenuName: 'SUB MENU 2-1'
                    , articleCnt: 0
                }
                , {
                    subMenuName: 'SUB MENU 2-2'
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
  