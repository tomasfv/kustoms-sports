import React from 'react'

class Chatbot extends React.Component {
  componentDidMount() {
    // Include the Crisp code here, without the <script></script> tags
    window.$crisp = []
    window.CRISP_WEBSITE_ID = '15d00ac4-93a2-4e24-b12d-268099c53a23'

    ;(function () {
      var d = document
      var s = d.createElement('script')

      s.src = 'https://client.crisp.chat/l.js'
      s.async = 1
      d.getElementsByTagName('head')[0].appendChild(s)
    })()
  }

  render() {
    return <div></div>
  }
}

export default Chatbot
