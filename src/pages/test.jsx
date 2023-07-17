import { useState, useEffect } from 'react'
import useSWR from 'swr'
import Highlight, { defaultProps } from 'prism-react-renderer'
import clsx from 'clsx'
const fetcher = (url) => fetch(url).then((res) => res.json())

const FilterComponent = () => {
  const { data, error } = useSWR(
    'https://api.stats.golem.network/v1/network/online',
    fetcher
  )
  const [filteredData, setFilteredData] = useState([])
  const [selectedNodes, setSelectedNodes] = useState(new Set())
  const [page, setPage] = useState(1)
  const [showCode, setShowCode] = useState(false)

  useEffect(() => {
    handleFilter({})
  }, [data])

  const handleFilter = (e) => {
    if (data) {
      const sortedData = [...data].sort(
        (a, b) => b.data['golem.inf.cpu.cores'] - a.data['golem.inf.cpu.cores']
      )
      setFilteredData(sortedData.slice((page - 1) * 6, page * 6))
    }
  }

  const handleSelectNode = (nodeId) => {
    if (selectedNodes.has(nodeId)) {
      selectedNodes.delete(nodeId)
      setSelectedNodes(new Set(selectedNodes))
    } else {
      setSelectedNodes(new Set(selectedNodes.add(nodeId)))
    }
  }

  const generateStrategy = () => {
    const codeSnippet = `
async def score_offer(self, offer):
    provider_id = offer.issuer
    selected_nodes = ${JSON.stringify([...selectedNodes])}

    if not provider_id in selected_nodes:
        score = -1
    else:
       score = 1

    if offer.is_draft:
    if not in selected_nodes:
        score = -1
    else:
       score = 1

    return score
    `
    return codeSnippet
  }

  const handlePageChange = (direction) => {
    if (direction === 'prev' && page > 1) {
      setPage(page - 1)
    } else if (direction === 'next') {
      setPage(page + 1)
    }
    handleFilter({})
  }

  if (error) return <div>Error</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="relative">
      {showCode ? (
        <>
          <Highlight
            {...defaultProps}
            code={generateStrategy()}
            language={'python'}
            theme={undefined}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={clsx(className, 'flex overflow-x-auto pb-6')}
                style={style}
              >
                <code className="px-4">
                  {tokens.map((line, lineIndex) => (
                    <div key={lineIndex} {...getLineProps({ line })}>
                      {line.map((token, tokenIndex) => (
                        <span key={tokenIndex} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </code>
              </pre>
            )}
          </Highlight>
        </>
      ) : (
        <>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredData.map((item) => (
              <div
                key={item.node_id}
                className={`card border p-4 ${
                  selectedNodes.has(item.node_id)
                    ? 'border-primary'
                    : 'border-gray-200'
                }`}
                onClick={() => handleSelectNode(item.node_id)}
              >
                <div>Node ID: {item.node_id.slice(0, 8)}</div>
                <div>CPU Cores: {item.data['golem.inf.cpu.cores']}</div>
                <div>Memory: {item.data['golem.inf.mem.gib']} GiB</div>
                <div>Disk: {item.data['golem.inf.storage.gib']} GiB</div>
                <div>CPU Model: {item.data['golem.inf.cpu.model']}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between space-x-4">
            <button
              onClick={() => handlePageChange('prev')}
              className="hover:bg-primary-dark rounded bg-primary px-4 py-2 font-bold text-white"
              disabled={page === 1}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange('next')}
              className="hover:bg-primary-dark rounded bg-primary px-4 py-2 font-bold text-white"
            >
              Next
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            {selectedNodes.size > 0 ? (
              <button
                onClick={() => setShowCode(true)}
                className="hover:bg-primary-dark rounded bg-primary px-4 py-2 font-bold text-white"
              >
                Generate Custom Market Strategy
              </button>
            ) : (
              <button
                disabled
                onClick={() => setShowCode(true)}
                className="cursor-not-allowed rounded bg-gray-300 px-4 py-2 font-bold text-white"
              >
                Generate Custom Market Strategy
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default FilterComponent
