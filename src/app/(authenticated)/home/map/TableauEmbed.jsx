// components/TableauEmbed.js
import { useEffect } from 'react'

const TableauEmbed = () => {
  useEffect(() => {
    // Dynamically import the Tableau embedding script
    const script = document.createElement('script')
    script.src =
      'https://us-east-1.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js'
    script.type = 'module'
    script.async = true
    document.body.appendChild(script)

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
      <tableau-viz
        id="tableau-viz"
        src="https://us-east-1.online.tableau.com/t/joellej221-617d170d9b/views/TreellionaireDashboard/Dashboard1"
        width="1000"
        height="863"
        toolbar="bottom"
      ></tableau-viz>
    </div>
  )
}

export default TableauEmbed
