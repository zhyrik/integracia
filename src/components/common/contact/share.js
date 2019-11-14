import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  EmailShareButton, 
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
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
  { buttton: PinterestShareButton,icon: PinterestIcon },
  { buttton: VKShareButton,icon: VKIcon },
  { buttton: OKShareButton,icon: OKIcon },
  { buttton: RedditShareButton,icon: RedditIcon },
  { buttton: TumblrShareButton,icon: TumblrIcon },
  { buttton: LivejournalShareButton,icon: LivejournalIcon },
  { buttton: MailruShareButton,icon: MailruIcon },
  { buttton: ViberShareButton,icon: ViberIcon },
  { buttton: WorkplaceShareButton,icon: WorkplaceIcon },
  { buttton: LineShareButton,icon: LineIcon },
  { buttton: PocketShareButton,icon: PocketIcon },
  { buttton: InstapaperShareButton,icon: InstapaperIcon },
  { buttton: EmailShareButton, icon: EmailIcon }
]
function Share() {
  const shareUrl = 'https://mystifying-lovelace-f6fbfb.netlify.com/'
  return (
    <Row>
      {shareArr.map(share => (
        <Col>
          <share.buttton url={shareUrl}>
            <share.icon size={32} round={true} />
          </share.buttton>
        </Col>
      ))}
    </Row>
  )
}

export default Share