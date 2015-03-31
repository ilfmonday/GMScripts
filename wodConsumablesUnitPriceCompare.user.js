// ==UserScript==
// @name        [wod]耗材单价
// @namespace   lgg
// @description 够买耗材比较生成单价，省钱利器。
// @include     http://*.world-of-dungeons.org/wod/spiel/trade/trade.php*
// @version     0.1
// @grant       none
// ==/UserScript==
// console.log('start1');
var tableList = document.getElementsByClassName('content_table');
var saleTable = tableList[0];
var tableBodyList = saleTable.children;
var goldStr = '<img alt="" src="/wod/css//skins/skin-4/images/icons/lang/cn/gold.gif" title="金币" border="0">';
var tblBody;
for (var i = tableBodyList.length - 1; i >= 0; i--) {
  if (tableBodyList[i].tagName == 'TBODY') {
    tblBody = tableBodyList[i];
  }
};
for (var i = 0; i < tblBody.rows.length; i++)
{
  row_i = tblBody.rows[i];
  col_item = row_i.cells[1];
  col_price = row_i.cells[3];
  var itemCountStr = col_item.innerHTML.match(/\(\d+\/\d+\)/);
  itemCountStr = itemCountStr + '';
  if (itemCountStr != 'null') {
    var itemCounts = itemCountStr.match(/\d+/);
    var itemPrice = col_price.innerHTML.match(/\d+/);
    var itemPricePerUse = parseFloat(itemPrice + '') / parseFloat(itemCounts + '');
    itemPricePerUse = itemPricePerUse.toFixed(4);
    // console.log('数量:' + itemCounts + ', 单价:' + itemPricePerUse + '/u');
    col_price.innerHTML = itemPricePerUse + goldStr + '/u &nbsp&nbsp&nbsp' + col_price.innerHTML;
  };
}

// ㄟ( ▔, ▔ )ㄏ 版本有待完善
