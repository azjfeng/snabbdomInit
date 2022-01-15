import { htmlDomApi, DOMAPI } from "./htmldomapi";
import { vnode, VNode } from "./vnode";

export function toVNode(node: Node, domApi?: DOMAPI): VNode {
    const api: DOMAPI = domApi !== undefined ? domApi : htmlDomApi;
    let text: string;
    if (api.isElement(node)) {                            //判断是否元素节点
        const id = node.id ? "#" + node.id : "";            //获取节点上的ID属性
        const cn = node.getAttribute("class");              //获取节点上的Class
        const c = cn ? "." + cn.split(" ").join(".") : "";  //将获取到的class分割
        const sel = api.tagName(node).toLowerCase() + id + c; //将id和class与节点名称组合
        const attrs: any = {};                                //存储节点得自定义属性
        const children: VNode[] = [];                         //存储当前节点得所有子节点
        let name: string;
        let i: number, n: number;
        const elmAttrs = node.attributes;                 //获取除了id和class的其他属性
        const elmChildren = node.childNodes;              //获取获取子节点
        for (i = 0, n = elmAttrs.length; i < n; i++) {
            name = elmAttrs[i].nodeName;
            if (name !== "id" && name !== "class") {
                attrs[name] = elmAttrs[i].nodeValue;
            }
        }
        for (i = 0, n = elmChildren.length; i < n; i++) {
            children.push(toVNode(elmChildren[i], domApi));
        }
        return vnode(sel, { attrs }, children, undefined, node);
    } else if (api.isText(node)) {                            //判断是否文本节点
        text = api.getTextContent(node) as string;
        return vnode(undefined, undefined, undefined, text, node);
    } else if (api.isComment(node)) {                         //判断是否是注释
        text = api.getTextContent(node) as string;
        return vnode("!", {}, [], text, node as any);
    } else {
        return vnode("", {}, [], undefined, node as any);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const node = document.getElementById("root");
    const data = toVNode(node)
    console.log(data)
});
