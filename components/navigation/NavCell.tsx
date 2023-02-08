import { Box, Text } from "@chakra-ui/react"
import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons"
import getConfig from "next/config"
import { useStoreActions, useStoreState } from "../../store/store"
import AnswerStatus from "../../lib/AnswerStatus"

const { publicRuntimeConfig } = getConfig()

function getStatusProps(status: AnswerStatus): [NavStatusColour, JSX.Element] {
  switch (status) {
    case AnswerStatus.Correct:
      return ["success", <CheckIcon color="quarternary" key={0} />]
    case AnswerStatus.Incorrect:
      return ["error", <SmallCloseIcon color="quarternary" key={0} />]
    default:
      return ["background", <></>]
  }
}

/**
 * Navigation cell
 * @param id - id of the cell (page number!)
 * @constructor
 */
export default function NavCell({ id }: { id: number }) {
  const isSummary = id > publicRuntimeConfig.questions
  const page = useStoreState((state) => state.session.page)
  const setPage = useStoreActions((actions) => actions.session.setPage)
  const [statusColour, StatusIcon] = useStoreState((state) => {
    const status = state.session.answers[id] || AnswerStatus.Unanswered
    return getStatusProps(status)
  })
  return (
    <Box
      data-testid="NavCell"
      bg={statusColour}
      display="flex"
      borderColor="quarternary"
      borderWidth={id === page ? 3 : 1}
      justifyContent="center"
      alignItems="center"
      borderRadius={5}
      onClick={() => setPage(id)}
      as="button"
      h={[5, 6]}
      w={isSummary ? 16 : [5, 6]}
      m={[0.5, 1]}
    >
      {isSummary ? <Text fontSize="xs">Summary</Text> : StatusIcon}
    </Box>
  )
}
