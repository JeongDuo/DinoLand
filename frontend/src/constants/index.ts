import { ChattingInputType } from '@/types';

export const ASSETS_PATH = '';
export const PLACEHOLDER_INPUT_DEFAULT = '메시지를 입력하세요.';
export const PLACEHOLDER_INPUT_PRIVATE = 'Ex) "@사용자명 메시지" 형식으로 입력하세요.';

export const MODAL_ASSETS = [
  '/assets/dino/mort.png',
  '/assets/dino/doux.png',
  '/assets/dino/vita.png',
  '/assets/dino/tard.png',
  '/assets/close.png',
  '/assets/modal.png',
  '/assets/arrow-left.png',
  '/assets/arrow-right.png',
];

export const CHATTING_INPUT_TYPE: Record<ChattingInputType, string> = {
  all: '전체',
  group: '그룹',
  private: '귓속말',
} as const;
