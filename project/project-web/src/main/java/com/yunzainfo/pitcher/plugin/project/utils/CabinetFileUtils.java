package com.yunzainfo.pitcher.plugin.project.utils;

import com.yunzainfo.pitcher.common.jackjson.JackJson;
import com.yunzainfo.pitcher.common.vo.ExtReturn;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.time.DateFormatUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.Date;
import java.util.UUID;

/**
 * Created by YangChao on 2017/12/4.
 */
public class CabinetFileUtils {

    public static String fileUpload(MultipartFile file, HttpServletRequest request, String saveFolder, long maxSize) {
        String returnMsg = null;

        try {
            String savePath = request.getSession().getServletContext()
                    .getRealPath("/");
            savePath = savePath.substring(0, savePath.lastIndexOf("webapps")-1);
            //root绝对路径
            String dirPath = savePath + "/webapps/ROOT";
               /* 相对文件夹 */
            String e = dirPath+"/wwwfile";
            if(maxSize != 0L && file.getSize() > maxSize) {
                returnMsg = JackJson.fromObjectToJson(new ExtReturn(false, "文件大小超过了" + maxSize / 1048576L + "M了,上传失败!"));
                return returnMsg;
            }
            //上传文件名
            String uploadFileName = file.getOriginalFilename();
            //上传文件类型
            String fileType = StringUtils.substringAfterLast(uploadFileName, ".");
            String dataPath = DateFormatUtils.format(new Date(), "yyyy-MM" + File.separator + "dd");
            String saveName = UUID.randomUUID().toString().replace("-", "");
            String finalPath = saveFolder + dataPath + File.separator + saveName + ("".equals(fileType)?"":"." + fileType);
//            logger.debug("savePath:{},finalPath:{}", new Object[]{e, finalPath});
            File saveFile = new File(e + "/" + finalPath);
            if(!saveFile.getParentFile().exists()) {
                saveFile.getParentFile().mkdirs();
            }

            FileUtils.writeByteArrayToFile(saveFile, file.getBytes());
            StringBuffer buffer = new StringBuffer();
            buffer.append("{success:true,fileInfo:{fileName:\'").append(uploadFileName).append("\',");
            buffer.append("filePath:\'").append(e.replace("\\", "/") + "/" + finalPath.replace("\\", "/")).append("\',");
            buffer.append("projectPath:\'").append("/wwwfile/"+finalPath.replace("\\", "/")).append("\',");
            buffer.append("storeName:\'").append(saveName + ("".equals(fileType)?"":"." + fileType));
            buffer.append("\'}}");
            returnMsg = buffer.toString();
        } catch (Exception var14) {
//            logger.error("Exception: ", var14);
        }

        return returnMsg;
    }
    /**
     * 创建文件夹
     * @param request
     * @param saveFolder
     * @return
     */
    public static File createFile(HttpServletRequest request,String saveFolder){
        // 保存的地址(webapps/ROOT)
        String savePath = request.getSession().getServletContext().getRealPath("/");
        savePath = savePath.substring(0, savePath.lastIndexOf("webapps")-1);
        //root绝对路径
        savePath += "/webapps/ROOT/wwwfile/filecabinet/";
        if(saveFolder != null){
            savePath += saveFolder;
        }
        File file=new File(savePath);
        // 判断文件夹是否存在，不存在则创建
        if (!file.exists()) {
            file.mkdirs();
        }
        return file;
    }

    /**
     * 上传文件
     * @param file
     * @param saveFolder
     * @return
     */
    public static File upload(MultipartFile file,String saveFolder){
        File f = null;
        try {
            // 上传的文件名 //需要保存
            String uploadFileName = file.getOriginalFilename();
            // 获取文件后缀名 //需要保存
            String fileType = StringUtils.substringAfterLast(uploadFileName, ".");
            // 以年月/天的格式来存放
//	        String dataPath = DateFormatUtils.format(new Date(), "yyyy-MM" + File.separator + "dd");
            // uuid来保存不会重复
            String saveName = UUID.randomUUID().toString().replace("-", "");
            // 最终相对于upload的路径，解决没有后缀名的文件 //需要保存
            // 为了安全，不要加入后缀名
            // \2011-12\01\8364b45f-244d-41b6-bbf4-8df32064a935，等下载的的时候在加入后缀名
            String finalPath = saveFolder + saveName + ("".equals(fileType) ? "" : "." + fileType);
//            logger.debug("finalPath:{}", new Object[] {  finalPath });
            File saveFile = new File(finalPath);
            // 判断文件夹是否存在，不存在则创建
            if (!saveFile.getParentFile().exists()) {
                saveFile.getParentFile().mkdirs();
            }
            // 写入文件
            FileUtils.writeByteArrayToFile(saveFile, file.getBytes());

            f = new File(finalPath.replace("\\", "/"));
        } catch (Exception e) {
//            logger.error("Exception: ", e);
        }
        return f;
    }
}
