'use client'

import { useEffect, useState } from "react";
import Menu from "./menu/Menu";
import MenuItem from "./menu/MenuItem";
import { callApi } from "@/common/script/constants";
import { ComResult } from "@/common/interface";

export default function SideNav({showMenu}:{showMenu:any}) {
    const api = {
        /* 메뉴 목록록 조회 */
        selectMenuList: () => {
            callApi(
                '/api/selectMenuList'
                , {}
                , (result:ComResult) => {
                    if(result.resultCode != 'SUCCESS') {
                        alert('메뉴 리스트 조회중 오류 발생');
                        setMenuList([]);
                    }
        
                    setMenuList(result.resultList);
                }
            );
        }
    }

    useEffect(() => {
        /* 메뉴 목록 조회 */
        api.selectMenuList();
    }, [])

    const [menuList, setMenuList] = useState<Array<any>>([]);

    return (
        <nav
            className="w-full p-3 pt-7"
        >
            <Menu menuList={menuList} showMenu={showMenu}>
                <MenuItem/>
            </Menu>
        </nav>
    );
  }
  