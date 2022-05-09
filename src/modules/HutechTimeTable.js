const puppeteer = require('puppeteer');

class Hutech {
  constructor() {
    this.browser = null;
    this.page = null;
  }

  async init() {
    this.browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });
    this.page = await this.browser.newPage();

    await this.page.goto('http://daotao.hutech.edu.vn', {
      waitUntil: 'networkidle0',
    });

    this.page.on('dialog', async dialog => {
      await dialog.dismiss();
    });
  }

  async login(username, password) {
    await this.page.type('#ctl00_ContentPlaceHolder1_ctl00_ucDangNhap_txtTaiKhoa', username, {
      delay: 100,
    });
    await this.page.type('#ctl00_ContentPlaceHolder1_ctl00_ucDangNhap_txtMatKhau', password, {
      delay: 100,
    });

    await Promise.all([
      this.page.click('#ctl00_ContentPlaceHolder1_ctl00_ucDangNhap_btnDangNhap'),
      this.page.waitForNavigation({
        waitUntil: 'networkidle0',
      }),
    ]);
    await this.page.waitFor('#ctl00_Header1_Logout1_lbtnThongBao');
  }

  async gotoTkb() {
    await this.page.goto('http://daotao.hutech.edu.vn/default.aspx?page=thoikhoabieu&sta=1', {
      waitUntil: 'networkidle0',
    });
    await this.page.evaluate(() => {
      document.querySelector('#ctl00_ContentPlaceHolder1_ctl00_ddlLoai').value = '0';
      document.querySelector('#ctl00_ContentPlaceHolder1_ctl00_ddlLoai').onchange();
    });
    await this.page.waitForSelector('#ctl00_ContentPlaceHolder1_ctl00_Table1');
    await this.page.waitFor(1000);
    await this.page.evaluate(() => {
      document.querySelector('#aspnetForm .base>table>tbody>tr:first-child').remove();
      document.querySelector('#aspnetForm .base>table>tbody>tr:last-child').remove();
      document.querySelector('.navigate-base .title-base').remove();
      document.querySelector('.navigate-base table:first-child').remove();
      document.querySelector('#ctl00_ContentPlaceHolder1_ctl00_pnlTuan>table:last-child').remove();
      document.body.style.overflow = 'hidden';
    });
    await this.page.screenshot({
      path: 'tkb.png',
    });
  }

  async close() {
    await this.browser.close();
  }
}

module.exports = Hutech