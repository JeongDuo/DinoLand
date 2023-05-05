import { CHATTING_INPUT_TYPE } from '@/constants';
import { ChattingInputType } from '@/types';

export const isChattingInputType = (input: string): input is ChattingInputType => {
  return input in CHATTING_INPUT_TYPE;
};
