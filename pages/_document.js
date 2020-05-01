import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

export default class MyDocument extends Document {

  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  render() {
    return (
      <html>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://use.typekit.net/rdi0mnt.css"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" ></link>
            <style
                data-emotion-css={this.props.ids.join(' ')}
                dangerouslySetInnerHTML={{ __html: this.props.css }}
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }

}