SET session_replication_role = 'replica';

DELETE FROM "UserInfo";
DELETE FROM "Users";
DELETE FROM "Like";
DELETE FROM "Comment";

ALTER SEQUENCE "UserInfo_id_seq" RESTART WITH 1;
ALTER SEQUENCE "Users_id_seq" RESTART WITH 1;
ALTER SEQUENCE "Like_id_seq" RESTART WITH 1;
ALTER SEQUENCE "Comment_id_seq" RESTART WITH 1;

SET session_replication_role = 'origin';

TRUNCATE TABLE petter_infos RESTART IDENTITY CASCADE;
TRUNCATE TABLE petter_images RESTART IDENTITY CASCADE;
TRUNCATE TABLE PetterImagesTimeline RESTART IDENTITY CASCADE;

SELECT tablename
FROM pg_tables
WHERE schemaname = 'public';