import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { A } from '../styled'

import { FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  VKShareButton,
  OKShareButton,
  ViberShareButton,
  EmailShareButton, 
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  VKIcon,
  OKIcon,
  ViberIcon,
  EmailIcon,
} from 'react-share'

/**
 * functional react component for share component
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */

const shareArr = [
  { buttton: FacebookShareButton, icon: FacebookIcon },
  { buttton: LinkedinShareButton, icon: LinkedinIcon },
  { buttton: TwitterShareButton,icon: TwitterIcon },
  { buttton: TelegramShareButton,icon: TelegramIcon },
  { buttton: WhatsappShareButton,icon: WhatsappIcon },
  /*{ buttton: PinterestShareButton,icon: PinterestIcon },*/
  { buttton: VKShareButton,icon: VKIcon },
  { buttton: OKShareButton,icon: OKIcon },
  /*{ buttton: RedditShareButton,icon: RedditIcon },
  { buttton: TumblrShareButton,icon: TumblrIcon },
  { buttton: LivejournalShareButton,icon: LivejournalIcon },
  { buttton: MailruShareButton,icon: MailruIcon },*/
  { buttton: ViberShareButton,icon: ViberIcon },
  /*{ buttton: WorkplaceShareButton,icon: WorkplaceIcon },
  { buttton: LineShareButton,icon: LineIcon },
  { buttton: PocketShareButton,icon: PocketIcon },
  { buttton: InstapaperShareButton,icon: InstapaperIcon },*/
  { buttton: EmailShareButton, icon: EmailIcon }
]
function Share() {
  const shareUrl = 'https://mystifying-lovelace-f6fbfb.netlify.com/'
  return (
    <Row>
      {shareArr.map((share, index) => (
        <Col key={index}>
          <A href="">
            <share.buttton url={shareUrl}>
              <share.icon size={25} round={true} />
            </share.buttton>
          </A>
        </Col>
      ))}
    </Row>
  )
}

export default Share