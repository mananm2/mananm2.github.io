import React from "react"
import { Document, Page, pdfjs } from "react-pdf"
import Columns from "react-bulma-components/lib/components/columns"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

class PDFViewer extends React.Component {
  state = {
    width: 700,
  }

  componentDidMount() {
    this.setState({
      width:
        this.state.width < this.container.offsetWidth
          ? this.state.width
          : this.container.offsetWidth,
    })
  }

  render() {
    return (
      <div ref={el => (this.container = el)} fullwidth>
        <Columns centered>
          <Columns.Column narrow>
            <Document file={this.props.file} renderMode="svg">
              <Page pageNumber={1} width={this.state.width}/>
            </Document>
          </Columns.Column>
        </Columns>
      </div>
    )
  }
}

export default PDFViewer
